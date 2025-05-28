import { extractFilePath } from "../helpers";
import { ProductInput } from "../interfaces";
import { supabase } from "../supabase/client"

////funcion de obtener productos

export const getProducts = async (page:number) => {

    const itemsPerPage = 12;
    const from = (page - 1) * itemsPerPage;
    const to = from + itemsPerPage - 1; 


    const {data: products, error, count} = await supabase
    .from('products')
    .select('*, variants(*)', {count: 'exact'})
    .order('created_at', {ascending:false})
    .range(from,to);

    if(error){
        console.log(error.message);
        throw new Error(error.message);
    }

    return {products, count};
};

////funcion de filtrado de productos

export const getFilteredProducts = async ({ 
    page = 1, 
    brand = [],
}: {
    page: number,
    brand: string[];
}) => {

    const itemsPerPage = 12;
    const from = (page - 1) * itemsPerPage;
    const to = from + itemsPerPage - 1; 

    let query = supabase
    .from('products')
    .select('*, variants(*)', {count:'exact'}) //el count me devuelve el total de registros en mi BD
    .order('created_at', {ascending:false})
    .range(from, to);

    //filtrar las brands

    if(brand.length > 0){
        query = query.in('brand', brand);
    }

    // Desestructuracion de objetos

    const {data, error, count} = await query;

    if(error){
        console.log(error.message);
        throw new Error(error.message);
    }

    return { data, count};

};

/// Funcion para obtener el producto mas reciente

export const getRecentProducts = async () => {
    const { data:products, error} = await supabase
    .from('products')
    .select('*, variants(*)',) 
    .order('created_at', {ascending:false})
    .limit(4);

    if(error){
        console.log(error.message);
        throw new Error(error.message);
    }

    return products;
};

/// Funcion para obtener los productos random

export const getRandomProducts = async () => {
    const { data:products, error} = await supabase
    .from('products')
    .select('*, variants(*)',) 
    .order('created_at', {ascending:false})
    .limit(20);

    if(error){
        console.log(error.message);
        throw new Error(error.message);
    }

    const randomProducts = products
    .sort(()=> 0.5 - Math.random())
    .slice(0, 8);

    return randomProducts;
};

// Funcion para obtener los products slug

export const getProductBySlug = async (slug: string) => {
    const { data, error} = await supabase
    .from('products')
    .select('*, variants(*)',) 
    .eq('slug', slug)
    .single(); //single para obtener un solo registro

    if(error){
        console.log(error.message);
        throw new Error(error.message);
    }

    return data;
};

// Funcion para obtener los products con el search

export const searchProducts = async (searchTerm: string) => {
    const {data, error} = await supabase
    .from('products')
    .select('*, variants(*)',) 
    .ilike('name', `%${searchTerm}%`); //ilike para buscar los productos que contengan el término de búsqueda

    if(error) {
        console.log(error.message);
        throw new Error(error.message);
    }

    return data;
}

////////// ADMIN ///////////

export const createProduct = async(productInput:ProductInput ) => {

    try {
        //1. crear el producto y obtener el id

        const {data: product, error: productError} = await supabase
        .from('products')
        .insert({
            name: productInput.name,
            brand: productInput.brand,
            slug: productInput.slug,
            features: productInput.features,
            description: productInput.description,
            images: [],
        })
        .select()
        .single();

        if(productError) {
            throw new Error(productError.message);
        }

        //2. subir imagen a bucket de supabase y la carpeta se crea con el product

        const folderName = product.id;

        const uploadedImages = await Promise.all(
            productInput.images.map(async(image) => {
                const {data, error} = await supabase.storage
                .from('product-images')
                .upload(`${folderName}/${product.id}-${image.name}`, image);

                if(error) throw new Error(error.message);

                const imageUrl = `${supabase.storage
                    .from('product-images')
                    .getPublicUrl(data.path).data.publicUrl
                }`;

                return imageUrl;
                
            })
        );

        // 3. actualizar el prodcutos pero ahora con las imagenes que se suban
        const {error: updatedError} = await supabase
        .from('products')
        .update({
            images: uploadedImages,
        })
        .eq('id', product.id);

        if(updatedError) throw new Error(updatedError.message);

        ///4. crear las variantes a los productos

        const variants = productInput.variants.map(variant => ({
            product_id: product.id,
            stock: variant.stock,
            price: variant.price,
            size: variant.size,
            color: variant.color,
            color_name: variant.colorName,
        }));

        const {error: variantError} = await supabase
        .from('variants')
        .insert(variants);

        if(variantError) throw new Error(variantError.message);

        return product;
        
    } catch (error) {
        console.log(error);
        throw new Error("Error creating product");
        
    }

}

//eliminar productos

export const deleteProduct = async (productId: string) => {
    //1. eliminar primero las variantes del producto

    const {error: variantsError} = await supabase
    .from('variants')
    .delete()
    .eq('product_id', productId);

    if(variantsError) throw new Error(variantsError.message);

    //2. se obtiene las imagenes antes de eliminar el producto como tal

    const {data: productImages, error: productImagesError} = await supabase
    .from('products')
    .select('images')
    .eq('id', productId)
    .single();

    if(productImagesError) throw new Error(productImagesError.message);

    // 3.eliminar producto

    const {error: productDeleteError} = await supabase
    .from('products')
    .delete()
    .eq('id', productId);

    if(productDeleteError) throw new Error(productDeleteError.message);

    //4. eliminar imagen en el bucket para que no se quede almacenada la imagen
    if(productImages.images.length > 0){
        const folderName = productId;

        const paths = productImages.images.map((image: string) => {
            const fileName = image.split('/').pop();
            return `${folderName}/${fileName}`;
        });

        const {error: storageError} = await supabase.storage
        .from('product-images')
        .remove(paths);

        if(storageError) throw new Error(storageError.message);
    }

    return true;

};

//Actualizar producto
export const updateProduct = async (
    productId: string,
    productInput: ProductInput
) => {
    //1. se obtiene la imagen actual del producto

    const {data: currentProduct, error: currentProductError} = await supabase
    .from('products')
    .select('images')
    .eq('id', productId)
    .single();

    if(currentProductError) throw new Error(currentProductError.message);

    const existingImages = currentProduct.images || [];

    //2. actualizar informacion individual de cada producto(no imagen)

    const {data: updatedProduct, error: productError} = await supabase
    .from('products')
    .update({
        name: productInput.name,
        brand: productInput.brand,
        slug: productInput.slug,
        features: productInput.features,
        description: productInput.description,
    })
    .eq('id', productId)
    .select()
    .single();

    if(productError) throw new Error(productError.message);

    //3. subir la nueva imagen y eliminar la vieja

    const folderName = productId;

    const validImages = productInput.images.filter(image => image)

    //3.1 saber cuales fueron las imagenes eliminadas

    const imagesToDelete = existingImages.filter(
        (image: File) => !validImages.includes(image)
    );

    //3.2 obtener el path de las imagenes que vamos a eliminar
    const filesToDelete = imagesToDelete.map(extractFilePath);

    //3.3 eliminar del bucket las imagenes
    if(filesToDelete.length > 0) {
        const {error: deleteImagesError} = await supabase.storage
        .from('product-images')
        .remove(filesToDelete);

        if(deleteImagesError){
            console.log(deleteImagesError);
            throw new Error(deleteImagesError.message);
        } else {
            console.log(`Images deleted: ${filesToDelete.join(', ')}`)
        }
    }

    const uploadedImages = await Promise.all(
        validImages.map(async image => {
            if(image instanceof File){
                ///si la imagen no es una URL entonces es un archivo por ende debe ser subida al bucket

                const { data, error } = await supabase.storage
                .from('product-images')
                .upload(`${folderName}/${productId}-${image.name}`, image);

                if(error) throw new Error(error.message);

                const imageUrl = supabase.storage
                .from('product-images')
                .getPublicUrl(data.path).data.publicUrl;

                return imageUrl;
            } else if (typeof image === 'string'){
                return image;
            } else {
                throw new Error('Invalid image format');
            }
        })
    );

    //4. actualizar productos con su nueva imagen

    const { error: updateImagesError } = await supabase
    .from('products')
    .update({
        images: uploadedImages,
    })
    .eq('id', productId);

    if(updateImagesError) throw new Error(updateImagesError.message);

    //5. actualizar las variantes del producto

    const existingVariants = productInput.variants.filter(v => v.id);
    const newVariants = productInput.variants.filter(v => !v.id);

    //5.1 modificando las variantes existentes

    if(existingVariants.length > 0) {
        const {error: updateVariantsError} = await supabase
        .from('variants')
        .upsert(
            existingVariants.map(variant => ({
                id: variant.id,
                product_id: productId,
                stock: variant.stock,
                price: variant.price,
                size: variant.size,
                color: variant.color,
                color_name: variant.colorName,
            })),
            {onConflict: 'id'}
        );

        if(updateVariantsError) throw new Error(updateVariantsError.message);
    }

    // 5.2 Crear y guardar las nuevas variantes
	let newVariantIds: string[] = [];

	if (newVariants.length > 0) {
		const { data, error: insertVariantsError } = await supabase
			.from('variants')
			.insert(
				newVariants.map(variant => ({
					product_id: productId,
					stock: variant.stock,
					price: variant.price,
					size: variant.size,
					color: variant.color,
					color_name: variant.colorName,
				}))
			)
			.select();

		if (insertVariantsError)
			throw new Error(insertVariantsError.message);

		newVariantIds = data.map(variant => variant.id);
	}

    // 5.3 combinar IDs de las variantes que ya existen y las nuevas variantes
    const currentVariantIds = [
        ...existingVariants.map(v => v.id),
        ...newVariantIds,
    ];

    ///5.4 Eliminar las variantes que no estan en el listado de IDs

    const {error: deleteVariantsError} = await supabase 
    .from('variants')
    .delete()
    .eq('product_id', productId)
    .not(
        'id',
        'in',
        `(${currentVariantIds ? currentVariantIds.join(',' ) : 0})`
    );

    if(deleteVariantsError) throw new Error(deleteVariantsError.message);

    return updatedProduct;
};
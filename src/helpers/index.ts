import { Color, Product, variantProduct } from "../interfaces";

//Funcion para el precio en dolar

export const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits:2,
    }
    ).format(price)
};

//prepare prodcuts

export const PreparedProducts = (products: Product[]) =>{
    return products.map(product =>{

        //variants for colors

        const colors = product.variants.reduce((acc: Color[], variant: variantProduct ) => {
            const existingColor = acc.find(item => item.color === variant.color)

            if(existingColor){
                //if color exist,compare price existing and variant
                existingColor.price = Math.min(existingColor.price,variant.price)
            } //mantener min

            else{
                acc.push({
                    color: variant.color,
                    price: variant.price,
                    name: variant.color_name,
                });
            }

            return acc;

        }, []);

        //obtener precio bajo de variants

        const price = Math.min(...colors.map(item => item.price));

        //return product format
        return{
            ...product,
            price,
            colors: colors.map(({name, color}) => ({name, color})),
            variants: product.variants,
        }

    });
}

//funcion para formatear fecha a 5 de abril 2025

export const formatDateLong = (date: string): string => {
    const dateObject = new Date(date);

    return dateObject.toLocaleDateString('en-US', {
        year:'numeric',
        month: 'long',
        day: 'numeric',
    });
};

//Funcion para general el slug de un producto

export const generateSlug = (name: string) : string => {
    return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

//Funcion para extrar lo que es el path relativo al bucket de una URL

export const extractFilePath = (url: string) => {
    const parts = url.split('/storage/v1/object/public/product-images/');

    if(parts.length !== 2) {
        throw new Error(`Invalid URL format: ${url}`);
    }

    return parts[1];
}
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ProductFormValues, productSchema } from '../../../lib/validators';
import { IconArrowBack } from '@tabler/icons-react';
import { useNavigate, useParams } from 'react-router-dom';
import { SectionFormProducts } from './SectionFormProducts';
import { InputForm } from './InputForm';
import { FeaturesInput } from './FeaturesInput';
import { useEffect } from 'react';
import { generateSlug } from '../../../helpers';
import { VariantsInput } from './VariantsInput';
import { UploaderImages } from './UploaderImages';
import { Editor } from './Editor';
import { useCreateProduct, useProduct, useUpdateProduct } from '../../../hooks';
import { Loader } from '../../shared/Loader';
import { JSONContent } from '@tiptap/react';

interface Props {
	titleForm: string;
}

export const FormProduct = ({ titleForm }: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
        control,
    } = useForm<ProductFormValues>({
        resolver: zodResolver(productSchema)
    });

    const {slug} = useParams<{ slug: string}>();

    const {product, isLoading} = useProduct(slug || '');

    const { mutate: createProduct, isPending } = useCreateProduct();

    const {mutate: updateProduct, isPending: isUpdatePending} = useUpdateProduct(product?.id || '');


    const navigate = useNavigate();

    useEffect(() => {
        if(product && !isLoading) {
            setValue('name', product.name);
            setValue('slug', product.slug);
            setValue('brand', product.brand);
            setValue('features', product.features.map((f: string) => ({value: f}))
        );
            setValue('variants', product.variants.map( v => ({
                id: v.id,
                stock: v.stock,
                price: v.price,
                color: v.color,
                size: v.size,
                colorName:v.color_name,
            })));
            setValue('images', product.images);
            setValue('description', product.description as JSONContent);

        }
    }, [product, setValue, isLoading])

        const onSubmit = handleSubmit(data => {
        const features = data.features.map(feature => feature.value);
    
        if (slug) {
            // Actualizar producto existente
            updateProduct({
                name: data.name,
                brand: data.brand,
                slug: data.slug,
                variants: data.variants,
                images: data.images,
                description: data.description,
                features,
            });
        } else {
            // Crear un nuevo producto
            createProduct({
                name: data.name,
                brand: data.brand,
                slug: data.slug,
                variants: data.variants,
                images: data.images,
                description: data.description,
                features,
            });
        }
    });

    const watchName = watch('name'); // esto es para ver el valor del input name

    useEffect(() => {
        if (!watchName) return;

        const generatedSlug = generateSlug(watchName);
        setValue('slug', generatedSlug, { shouldValidate: true });
    }, [watchName, setValue]);

    if (isPending || isUpdatePending || isLoading) return <Loader />;

    return (
      <div className="flex flex-col gap-6 relative">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button
              className="bg-white p-1.5 rounded-md shadow-sm border border-slate-200 transition-all 
                        group-hover:scale-105"
              onClick={() => navigate(-1)}
            >
              <IconArrowBack
                size={18}
                className="text-gray-950 transition-all group-hover:scale-125"
              />
            </button>

            <h2 className="font-bold tracking-tight capitalize text-gray-950">
              {titleForm}
            </h2>
          </div>
        </div>

        <form
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 auto-rows-max flex-1"
          onSubmit={onSubmit}
        >
          <SectionFormProducts
            titleSection="Detalles del producto"
            className="lg:col-span-2 lg:rows-span-2"
          >
            <InputForm
              type="text"
              placeholder="Ejemplo: T-shirt Nike"
              label="Nombre"
              name="name"
              register={register}
              errors={errors}
              required
            />
            <FeaturesInput control={control} errors={errors} />
          </SectionFormProducts>

          <SectionFormProducts>
            <InputForm
              type="text"
              label="Slug"
              placeholder="t-shirt-nike"
              name="slug"
              register={register}
              errors={errors}
            />

            <InputForm
              type="text"
              label="Producto"
              placeholder="nike-max"
              name="brand"
              register={register}
              errors={errors}
              required
            />
          </SectionFormProducts>

          <SectionFormProducts
            titleSection="Variantes del producto"
            className="lg:col-span-2 h-fit"
          >
            <VariantsInput
              control={control}
              errors={errors}
              register={register}
            />
          </SectionFormProducts>

          <SectionFormProducts titleSection="Imagenes del producto">
            <UploaderImages errors={errors} setValue={setValue} watch={watch} />
          </SectionFormProducts>

          <SectionFormProducts
            titleSection="Descripción del producto"
            className="col-span-full"
          >
            <Editor
              setValue={setValue}
              errors={errors}
              initialContent={product?.description as JSONContent}
            />
          </SectionFormProducts>

          <div className="flex gap-3 absolute top-0 right-0 ">
            <button
              className="btn-secondary-outline"
              type="button"
              onClick={() => navigate(-1)}
            >
              Cancelar
            </button>

            <button
              className="bg-[#2e682d] border border-[#2e682d] text-white hover:bg-[#2e682d] rounded-lg p-2"
              type="submit"
            >
              Guardar Producto
            </button>
          </div>
        </form>
      </div>
    );
};

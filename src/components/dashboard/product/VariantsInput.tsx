import { type Control, type FieldErrors, useFieldArray, type UseFormRegister, useWatch } from 'react-hook-form';
import type { ProductFormValues } from '../../../lib/validators';
import { IconCircleDashedX, IconCirclePlus } from '@tabler/icons-react';
import { useEffect, useState } from 'react';


interface Props {
    control:Control<ProductFormValues>;
    errors: FieldErrors<ProductFormValues>;
    register: UseFormRegister<ProductFormValues>;

}

const headersVariants = ['Stock', 'Precio', 'Size', 'Color', ''];

export const VariantsInput = ({control,errors,register}: Props) => {

    const {fields, append, remove } = useFieldArray({
        control,
        name: 'variants',
    });

    const [colorActive, setColorActive] = useState<boolean[]>([]);

    const addVariant = () => {
        append({
            stock: 0,
            price: 0,
            size: '',
            color: '',
            colorName: '',
        })
    }

    const removeVariant = (index: number) =>{
        remove(index);
    }

    const toggleColorActive = (index:number) => {
        setColorActive(prev => prev.map((item, i) => i === index ? !item : item))
    }

    //use watch aqui para observar todos los valores del color y el colorName(useWatch react hook)

    const colorValues = useWatch({
        control,
        name: fields.map((_, index) => `variants.${index}.color` as const)
    });

    //observar el colorName

    const colorNameValues = useWatch({
        control,
        name: fields.map((_, index) => `variants.${index}.colorName` as const)
    });

    //errors

    const getFirstError = (
        variantErrors: FieldErrors<ProductFormValues['variants'][number]>
    ) => {
        if (variantErrors) {
            const keys = Object.keys(
                variantErrors
            ) as (keyof typeof variantErrors)[];
            if (keys.length > 0) {
                return variantErrors[keys[0]]?.message;
            }
        }

    }

    useEffect(() => {
        setColorActive(prev => fields.map((_, index) => prev[index] || false)
    );
    }, [fields]);

    return (
      <div className="flex flex-col gap-3">
        <div className="space-y-4 border-b border-slate-200 pb-6">
          <div className="grid grid-cols-5 gap-4 justify-start">
            {headersVariants.map((header, index) => (
              <p key={index} className="text-xs font-semibold text-slate-800">
                {header}
              </p>
            ))}
          </div>

          {fields.map((field, index) => (
            <div key={field.id}>
              <div className="grid grid-cols-5 gap-4 items-center">
                <input
                  type="number"
                  placeholder="Stock"
                  {...register(`variants.${index}.stock`, {
                    valueAsNumber: true,
                  })}
                  className="border border-slate-300 rounded-md px-3 py-1.5 text-xs font-semibold placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-slate-400 appearance-none"
                />

                <input
                  type="number"
                  step={0.01}
                  placeholder="Precio"
                  {...register(`variants.${index}.price`, {
                    valueAsNumber: true,
                  })}
                  className="border border-slate-300 rounded-md px-3 py-1.5 text-xs font-semibold placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-slate-400 appearance-none"
                />

                <input
                  type="text"
                  placeholder="Size: S, M, L"
                  {...register(`variants.${index}.size`, {})}
                  className="border border-slate-300 rounded-md px-3 py-1.5 text-xs font-semibold placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-slate-400 appearance-none"
                />

                <div className="flex relative">
                  {colorActive[index] && (
                    <div
                      className="absolute bg-stone-100 rounded-md bottom-8 left-[40px] p-1
                                            w-[100px] h-fit space-y-2 "
                    >
                      <input
                        type="color"
                        {...register(`variants.${index}.color`)}
                        className="rounded-md px-3 py-1.5 w-full"
                      />
                      <input
                        type="text"
                        placeholder="Blue"
                        {...register(`variants.${index}.colorName`)}
                        className="rounded-md px-3 py-1.5 w-full text-xs focus:outline-none font-semibold placeholder:font-normal"
                      />
                    </div>
                  )}

                  <button
                    className="border border-slate-300 w-full h-8 cursor-pointer rounded text-xs font-medium flex items-center justify-center"
                    type="button"
                    onClick={() => toggleColorActive(index)}
                  >
                    {colorValues[index] && colorNameValues[index] ? (
                      <span
                        className={`inline-block w-4 h-4 rounded-full bg-block`}
                        style={{
                          backgroundColor: colorValues[index],
                        }}
                      />
                    ) : (
                      "Agregar"
                    )}
                  </button>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => removeVariant(index)}
                    className="p-1"
                  >
                    <IconCircleDashedX size={20} />
                  </button>
                </div>
              </div>

              {errors.variants && errors.variants[index] && (
                <p className="text-red-500 text-xs mt-1">
                  {getFirstError(errors.variants[index])}
                </p>
              )}
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={addVariant}
          className="px-4 py-2 text-slate-800 rounded-md text-sm font-semibold tracking-tight flex items-center gap-1 self-center hover:bg-slate-100"
        >
          <IconCirclePlus size={16} />
          Agregar variante
        </button>

        {fields.length === 0 && errors.variants && (
          <p className="text-red-500 text-xs mt-1">
            Se requiere al menos una variante
          </p>
        )}
      </div>
    );
};
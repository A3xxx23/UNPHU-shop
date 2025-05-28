import { AddressFormValues } from "../../lib/validators";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface Props{
    register: UseFormRegister<AddressFormValues>;
    errors: FieldErrors<AddressFormValues>;

    name: keyof AddressFormValues;
    classname?: string;
    placeholder: string;
}


export const InputAddress = ({
    register,
    errors,
    name,
    classname,
    placeholder,
}: Props) => {
    return <>
    <div
    className={`border border-slate-200 rounded-md overflow-hidden py-2 ${
        errors[name] && 'border-red-500'
    }  ${classname}`}
    >
        <input type="text"
        className="w-full px-3 py-1 text-sm focus:outline-none"
        placeholder={placeholder}
        {...register(name)}
        />
    </div>
    {
        errors[name] && <p className="text-red-500 text-xs">{errors[name].message}</p>
    }
    
    </>
}
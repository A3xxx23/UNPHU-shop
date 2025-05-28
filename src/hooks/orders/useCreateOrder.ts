//Mutations are typically used to create/update/delete data or perform server side-effects
//a diferencia del Usequery que solo lee los datos el mutation se usa para modificar datos y renderizarlo

import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createOrder } from "../../actions";
import { useNavigate } from "react-router-dom";

export const useCreateOrder= () => {

    const queryclient = useQueryClient();
    const navigate = useNavigate();


    const { mutate, isPending} = useMutation({
        mutationFn: createOrder,
        onSuccess: data => {
            queryclient.invalidateQueries({
                queryKey:['orders']
            });

            navigate(`/checkout/${data.id}/thank-you`);
    
    },
    onError: (err) => {
        toast.error(err.message,{
            position: 'bottom-right',
            duration: 2000,
        });
    },
    });

    return {
        mutate,
        isPending,
    };
}
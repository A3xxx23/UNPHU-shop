//Mutations are typically used to create/update/delete data or perform server side-effects
//a diferencia del Usequery que solo lee los datos el mutation se usa para modificar datos y renderizarlo

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signIn } from "../../actions/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const useLogin= () => {

    const navigate = useNavigate();
    const queryclient = useQueryClient();

    const { mutate, isPending} = useMutation({
        mutationFn: signIn,
        onSuccess: () => {
            queryclient.invalidateQueries({queryKey:['user']})
            navigate('/');
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
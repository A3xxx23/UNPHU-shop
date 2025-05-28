//Mutations are typically used to create/update/delete data or perform server side-effects

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signUp } from "../../actions/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const useRegister = () => {

    const navigate = useNavigate();
    const queryclient = useQueryClient();

    const { mutate, isPending} = useMutation({
        mutationFn: signUp,
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
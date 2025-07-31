import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateOrderStatus } from "../../actions";

export const useChangeStatusOrder= () => {

    const queryclient = useQueryClient();

    const { mutate, isPending} = useMutation({
        mutationFn: updateOrderStatus,
        onSuccess: () => {
            queryclient.invalidateQueries({
                 queryKey: ['orders', 'admin'],
            });
            toast.success('Estado de la orden actualizado', {
                position: 'bottom-right',
                duration: 2000,
            });
        },
        onError: (error) => {
        console.log(error);
        toast.error('Error al actualizar el estado de la orden',{
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
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteProduct } from '../../actions';
import toast from 'react-hot-toast';

export const useDeleteProduct = () => {
	const queryClient = useQueryClient();

	const { mutate, isPending } = useMutation({
		mutationFn: deleteProduct,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['products'],
			});
			toast.success('Product deleted successfully', {
				position: 'bottom-right',
			});
		},
		onError: error => {
			console.log(error);
			toast.error('Error deleted product', {
				position: 'bottom-right',
			});
		},
	});

	return {
		mutate,
		isPending,
	};
};
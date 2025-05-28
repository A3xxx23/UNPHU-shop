import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateProduct } from '../../actions';
import { ProductInput } from '../../interfaces';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const useUpdateProduct = (productId: string) => {
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	const { mutate, isPending } = useMutation({
		mutationFn: async (data: ProductInput) =>
			updateProduct(productId, data),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['products'],
			});
			toast.success('Product updated successfully', {
				position: 'bottom-right',
			});
			navigate('/dashboard/product');
		},
		onError: error => {
			console.log(error);
			toast.error('Error updating product', {
				position: 'bottom-right',
			});
		},
	});

	return {
		mutate,
		isPending,
	};
};
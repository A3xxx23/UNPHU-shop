import { useQuery } from '@tanstack/react-query';
import { getOrderById } from '../../actions';

export const useOrder = (orderId: number) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['order', orderId],
		queryFn: () => getOrderById(orderId),
		enabled: !!orderId,
		retry: false,
	});

	return {
		data,
		isLoading,
		isError,
	};
};
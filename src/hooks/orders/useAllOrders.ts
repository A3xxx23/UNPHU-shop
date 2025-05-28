import { useQuery } from '@tanstack/react-query';
import { getAllOrders } from '../../actions';

export const useAllOrders = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['orders', 'admin'],
		queryFn: getAllOrders,
	});

	return {
		data,
		isLoading,
	};
};
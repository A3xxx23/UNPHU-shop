import { TableOrdersAdmin } from '../../components/dashboard';
import { Loader } from '../../components/shared/Loader';
import { useAllOrders } from '../../hooks/orders/useAllOrders';

export const DashboardOrdersPage = () => {
	const { data, isLoading } = useAllOrders();

	if (isLoading || !data) return <Loader />;

	const transformedData = data.map(order => ({
		...order,
		customers: Array.isArray(order.customers) ? order.customers[0] : order.customers, // Selecciona el primer cliente si es un array
	  }));
	  
	  <TableOrdersAdmin orders={transformedData} />

	return (
		<div className='space-y-5'>
			<h1 className='text-2xl font-bold'>Ordenes</h1>

			<TableOrdersAdmin orders={transformedData} />
		</div>
	);
};
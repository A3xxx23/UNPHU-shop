import { useNavigate, useParams } from 'react-router-dom';
import { useOrderAdmin } from '../../hooks';
import { Loader } from '../../components/shared/Loader';
import { formatDateLong, formatPrice } from '../../helpers';
import { IconChevronLeft } from '@tabler/icons-react';

const tableHeaders = ['Product', 'Quantity', 'Total'];

export const DashboardOrderPage = () => {
	const navigate = useNavigate();

	const { id } = useParams<{ id: string }>();

	const { data: order, isLoading } = useOrderAdmin(Number(id));

	if (isLoading || !order) return <Loader />;

	return (
		<div>
			<div className='flex justify-between items-center'>
				<button
					className='border rounded-full py-2 border-slate-200 px-5 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-widest hover:bg-stone-100 transition-all'
					onClick={() => navigate(-1)}
				>
					<IconChevronLeft size={16} />
					Back to Orders
				</button>

				<div className='flex flex-col items-center gap-1.5'>
					<h1 className='text-3xl font-bold'>Order #{id}</h1>
					<p className='text-sm'>{formatDateLong(order.created_at)}</p>
				</div>
				<div />
				<div />
			</div>

			<div className='flex flex-col mt-10 mb-5 gap-10'>
            <table className='text-sm w-full caption-bottom overflow-auto'>
					<thead className='border-b border-gray-200 pb-3'>
						<tr className='text-sm font-bold'>
							{tableHeaders.map((header, index) => (
								<th key={index} className={`h-12 px-4 ${header === 'Product' ? 'text-left' : 'text-center'}`}>
									{header}
								</th>
							))}
						</tr>
					</thead>

					<tbody className='[&_tr:last-child]:border-0'>
						{Array.isArray(order.orderItems) && order.orderItems.map((item, index) => (
							<tr key={index} className='border-b border-gray-200'>
								<td className='p-4 font-medium tracking-tighter flex gap-3 items-center'>
									<img
										src={item.productImage || 'https://ui.shadcn.com/placeholder.svg'}
										alt={item.productName || 'Product'}
										className='h-20 w-20 object-contain rounded-lg'
									/>
									<div className='space-y-2'>
										<h3>{item.productName || 'Unknown Product'}</h3>
										<p className='text-xs'>
											{item.color_name || 'No color'} / {item.size || 'No size'}
										</p>
										<p className='text-sm'>
											{formatPrice(item.price || 0)}
										</p>
									</div>
								</td>
								<td className='p-4 font-medium tracking-tighter text-center'>
									{item.quantity || 0}
								</td>
								<td className='p-4 font-medium tracking-tighter text-center'>
									{formatPrice((item.price || 0) * (item.quantity || 0))}
								</td>
							</tr>
	                  ))}
					</tbody>
				</table>

				<div className='flex flex-col gap-3 text-slate-600 text-sm self-end w-1/2'>
					<div className='flex justify-between'>
						<p>Subtotal</p>
						<p>{formatPrice(order.totalAmount)}</p>
					</div>
					<div className='flex justify-between'>
						<p>Delivery (Standard)</p>
						<p>{formatPrice(0)}</p>
					</div>
					<div className='flex justify-between text-black font-semibold'>
						<p>Total</p>
						<p>{formatPrice(order.totalAmount)}</p>
					</div>
				</div>

				<div className='flex flex-col gap-3'>
					<h2 className='text-lg font-bold'>Address</h2>

					<div className='border border-stone-300 p-5 flex flex-col gap-5'>
						<div className='space-y-1'>
							<h3 className='font-medium'>Client:</h3>
							<p>{order.customer.full_name}</p>
						</div>

						<div className='flex flex-col gap-1 text-sm'>
							<h3 className='font-medium text-base'>Delivery:</h3>
							<p>{order.address.addressLine1}</p>
							<p>
                            {order.address.addressLine2 &&
									order.address.addressLine2}
							</p>
							<p>{order.address.city}</p>
							<p>{order.address.state}</p>
							<p>{order.address.postalCode}</p>
							<p>{order.address.country}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
  
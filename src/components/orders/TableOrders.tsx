import { useNavigate } from "react-router-dom";
import { formatDateLong, formatPrice } from "../../helpers";
import { OrderItemSingle } from "../../interfaces";

interface Props {
    orders: OrderItemSingle[];
}

const tableHeaders = [
    'Order ID',
    'Date',
    'Status',
    'Total',
]

export const TableOrders = ({orders}: Props) => {
    const navigate = useNavigate();

    return <div className="relative w-full h-full ">
        <table className="text-sm w-full caption-bottom overflow-auto">
            <thead className="border border-gray-200 pb-3">
                <tr className="text-sm font-bold text-stone-900">
                    {tableHeaders.map((header,index) => (
                        <th key={index} className="h-12 px-4 text-left">
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>

            <tbody className="[&_tr:last-child]:border-0">
                {orders.map(order => (
                    <tr 
                    key={order.id}
                    className="cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                    onClick={() => navigate(`/account/orders/${order.id}`)}
                    >
                        <td className="p-4 font-medium -tracking-tighter text-stone-600">
                            {order.id}
                        </td>
                        <td className="p-4 font-medium -tracking-tighter text-stone-600">
                            {formatDateLong(order.created_at)}

                        </td>
                        <td className="p-4 font-medium -tracking-tighter text-stone-600">
                            {order.status}
                        </td>
                        <td className="p-4 font-medium -tracking-tighter text-stone-600">
                            {formatPrice(order.total_amount)}
                        </td>

                    </tr>

                ))}
            </tbody>

        </table>
        
    </div>
}
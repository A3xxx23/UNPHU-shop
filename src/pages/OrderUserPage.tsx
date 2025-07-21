import { useNavigate, useParams } from "react-router-dom"
import { useOrder } from "../hooks";
import { Loader } from "../components/shared/Loader";
import { IconArrowLeftDashed } from "@tabler/icons-react";
import { formatDateLong, formatPrice } from "../helpers";

const tableHeaders = ['Product', 'Quantity', 'Total']

export const OrderUserPage = () => {
    
    const {id} = useParams<{id: string}>();

    const {data: order, isLoading} = useOrder(Number(id!));

    const navigate = useNavigate();

    if (isLoading || !order) return <Loader/>
    
    
    return <div>
        <div className="w-full max-w-7xl mx-auto px-5 lg:px-12">
            <button
            className="border rounded-full border-slate-200 px-5 flex items-center justify-center gap-2 text-xs font-medium 
            uppercase tracking-widest hover:bg-stone-100 transition-all text-stone-950"
            onClick={() => navigate(-1)} // se devuelve a la página anterior
            >
                <IconArrowLeftDashed size={18}/>
                Return to orders
            </button>

            <div className="flex flex-col items-center gap-1.5">
                <h1 className="text-3xl font-bold text-stone-950">Order #{id}</h1>
                <p className="text-sm text-stone-600">{formatDateLong(order.created_at)}</p>
            </div>
            <div></div>
            <div></div>
        </div>

        <div className="flex flex-col mt-10 mb-5 gap-10">
            <table className="text-sm w-full caption-bottom overflow-auto">
                <thead>
                    <tr>
                        {
                            tableHeaders.map((header, index) => (
                                <th
                                key={index}
                                className="h-12 text-center uppercase tracking-widest text-stone-600 font-medium"
                                >
                                    {header}
                                </th>
                            ))
                        }
                    </tr>
                </thead>

                <tbody>
                    {order.orderItems.map((product, index) => (
                        <tr 
                        key={index}
                        className="border-b border-gray-200"
                        >
                            <td className="p-4 font-medium tracking-tighter flex gap-3 items-center">
                                <img 
                                src={product.productImage || 'https://ui.shadcn.com/placeholder.svg'} 
                                alt={product.productName} 
                                className="h-20 w-20 object-contain rounded-lg"
                                />

                                <div className="space-y-2">
                                    <h3 className="text-stone-500 text-xs">{product.productName}</h3>
                                    <p className="text-stone-500 text-xs">{product.color_name} / {product.size}</p>
                                    <p className="text-stone-500 text-xs">
                                        {formatPrice(product.price)}
                                    </p>

                                </div>
                            </td>

                            <td className="p-4 font-medium tracking-tighter text-center text-stone-600">
                                {product.quantity}
                            </td>

                            <td className="p-4 font-medium tracking-tighter text-center text-stone-600">
                                {formatPrice(product.price * product.quantity)}
                            </td>

                        </tr>
                    ))}

                </tbody>

            </table>

            <div className="flex flex-col gap-3 text-slate-600 text-sm self-end w-1/2">
            <div className="flex justify-between">
                <p className="text-sm text-stone-600">Subtotal</p>
                <p className="text-sm  text-stone-600">{formatPrice(order.totalAmount)}</p>

            </div>

            <div className="flex justify-between">
                <p className="text-sm text-stone-600">Delivery (Standard)</p>
                <p className="text-sm text-stone-600">{formatPrice(0)}</p>
            </div>

            <div className="flex justify-between text-black font-semibold">
                <p className="text-md font-extrabold text-stone-950">Total</p>
                <p className="text-md font-bold text-stone-950"> {formatPrice(order.totalAmount)}</p>

            </div>
            </div>

            <div className="flex flex-col gap-3">
                <h2 className="text-lg font-bold text-black"> Address</h2>

                <div className="border border-slate-200 p-5 flex flex-col gap-5">
                    <div className="space-y-1">
                        <h3 className="font-medium text-black text-sm">
                            Client:
                        </h3>

                        <p className="text-stone-600 text-sm">{order.customer.full_name}</p>
                    </div>

                    <div className="flex flex-col gap-1 text-sm">
                        <h3 className="font-medium text-black text-base">
                            Delivery
                        </h3>
                        <p className="text-stone-600 text-sm">{order.address.addressLine1}</p>
                        <p className="text-stone-600 text-sm">{order.address.addressLine2 && order.address.addressLine2}</p>
                        <p className="text-stone-600 text-sm">{order.address.city}</p>
                        <p className="text-stone-600 text-sm">{order.address.state}</p>
                        <p className="text-stone-600 text-sm">{order.address.postalCode}</p>
                        <p className="text-stone-600 text-sm">{order.address.country}</p>

                    </div>
                </div>

            </div>

        </div>
    </div>
}
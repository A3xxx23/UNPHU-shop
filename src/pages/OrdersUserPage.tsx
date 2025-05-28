import { Link } from "react-router-dom"
import { useOrders } from "../hooks";
import { Loader } from "../components/shared/Loader";
import { TableOrders } from "../components/orders/TableOrders";

export const OrdersUserPage = () => {

    const { data: orders, isLoading } = useOrders();

    if (isLoading || !orders) return <Loader/>

    return <div className="w-full max-w-7xl mx-auto px-5 lg:px-12 flex flex-col gap-6 items-center">
        <div className="flex gap-2">
            <h1 className="text-3xl font-bold text-black">
                Orders 
            </h1>

            <span className="w-5 h-5 rounded-full bg-black text-white text-[11px] flex justify-center
            items-center mt-1 font-semibold">
                {orders.length}

            </span>
        </div>

        {
            orders.length === 0 ? (
                <>
                <p className="text-slate-600 text-[13px]">
                    You don't have any orders yet
                </p>

                <Link to='/Shop All' className="bg-black text-white uppercase font-semibold tracking-widest text-xs py-4 rounded-full px-8 ">
                    Start Shopping

                </Link>
                
                </>

            ) : (
                <TableOrders orders={orders} />

            )
        }

    </div>

}
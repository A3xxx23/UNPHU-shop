import { IconShieldLock, IconShoppingBag, IconX } from "@tabler/icons-react"
import { useGlobalStore } from "../../store/global.store";
import { Link } from "react-router-dom";
import { CartItem, IcartItem } from "./CartItem";
import { useCartStore } from "../../store/cart.store";

export const Cart = () => {

    const closeSheet = useGlobalStore(state => state.closeSheet);

    const cartItems = useCartStore(state => state.items);
    const clearCart = useCartStore(state => state.clearCart);
    const totalItemsInCart = useCartStore(state => state.totalItemsInCart);


    return (
        <div className="flex flex-col h-full">
            <div className="px-5 py-7 flex justify-between items-center border-b border-slate-200">
                <span className="flex gap-3 items-center font-semibold">
                    <IconShoppingBag size={25} />
                </span>{totalItemsInCart} items

                <button onClick={closeSheet}>
                <IconX stroke={2} size={25} className='text-black'/>
                </button>
            </div>

            {/* lista de productos en el carrito */}

            {
                totalItemsInCart > 0 ? (
                    <>
               <div className="p-7 overflow-auto flex-1">
                <ul className="space-y-9">
                    {cartItems.map((item: IcartItem) => (
                        <CartItem item = {item} key={item.variantId}/>
                    ))}
                </ul>

               </div>

               {/* botones de accion */}

               <div className="mt-4 p-7">
                <Link
                to='/checkout'
                className="w-full bg-black text-white py-3.5 rounded-full flex items-center justify-center gap-3"
                >
                    <IconShieldLock size={25}  />
                    Continue shopping
                </Link>

                <button className="mt-3 w-full text-black border border-black rounded-full py-3" onClick={clearCart}>
                    Clean cart

                </button>

               </div>
            
            </>
                ): (
                    <div className="flex flex-col items-center justify-center h-full gap-7">
                        <p className="text-sm font-medium tracking-tight text-slate-500">
                            Cart is empty
                        </p>

                        <Link
                        to='/shop all'
                        className="py-4 bg-black text-white rounded-full px-7 text-xs uppercase tracking-widest font-semibold"
                        onClick={closeSheet}
                        >
                        Go shopping
                        </Link>
                    </div>
                )
            }

        </div>
    )
}
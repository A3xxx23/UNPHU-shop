import { zodResolver } from "@hookform/resolvers/zod"
import { AddressFormValues, addressSchema } from "../../lib/validators"
import { InputAddress } from "./InputAddress"
import { useForm } from "react-hook-form"
import { ItemsCheckout } from "./ItemsCheckout"
import { formatPrice } from "../../helpers"
import { useCartStore } from "../../store/cart.store"
import { useCreateOrder } from "../../hooks"
import { Loader } from "../shared/Loader"

export const FormCheckout = () => {

    const {
        register, 
        formState: { errors }, 
        handleSubmit
    } = useForm<AddressFormValues>({
        resolver:zodResolver(addressSchema),
    });

    //enviando la mutacion de create order

    const onSubmit = handleSubmit(data => {
        const orderInput = {
            address: data,
            cartItems: cartItems.map(item => ({
                variantId: item.variantId,
                quantity: item.quantity,
                price: item.price,
            })),
            totalAmount,
        };
    
        createOrder(orderInput, {
            onSuccess: () => {
                cleanCart();
            },
        });
    
        console.log(data)
    });    

    const cleanCart = useCartStore(state => state.clearCart);
    const cartItems = useCartStore(state => state.items);
    const totalAmount = useCartStore(state => state.totalAmount);


    const {mutate: createOrder, isPending} = useCreateOrder();

    if (isPending) {
        return <div className="flex flex-col gap-3 h-screen items-center justify-center">
            <Loader/>

            <p className="text-sm font-medium text-stone-500">We are processing your order</p>
        </div>
    }

    return (
        <div>
            <form className="flex flex-col gap-6"
            onSubmit={onSubmit}
            >
                <div className="flex flex-col gap-3">

                <h3 className="text-lg font-semibold tracking-normal text-slate-950">
                    Delivery
                </h3>

                <InputAddress
                register = {register}
                errors={errors}
                name = "addressLine1"
                placeholder="Address line 1"
                classname="text-black"
                />

                <InputAddress
                register = {register}
                errors={errors}
                name = "addressLine2"
                placeholder="Address line 2 (optional)"
                classname="text-black"
                />

                <InputAddress
                register = {register}
                errors={errors}
                name = "state"
                placeholder="State"
                classname="text-black"
                />

               <InputAddress
                register = {register}
                errors={errors}
                name="postalCode"
                placeholder="Postal code (optional)"
                classname="text-black"
                />  

                <InputAddress
                register = {register}
                errors={errors}
                name="city"
                placeholder="City"
                classname="text-black"
                />

                <select
                className="border border-slate-200 rounded-md p-3" {...register('country')}>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                    <option value="Dominican Republic">Dominican Republic</option>
                </select>
                </div>

                <div className="flex flex-col gap-3">
                <p className="text-sm font-medium text-slate-950">
                    Shipping method
                </p>

                <div className="flex items-center justify-between text-sm border border-slate-600 bg-stone-100 py-4 rounded-md px-6">
                    <span className="font-normal text-slate-600">Standard</span>
                    <span className="font-semibold text-slate-950">Free</span>
                </div>
            </div>

            <div className="flex flex-col ">
                <div className="flex justify-between items-center text-sm border border-slate-600 bg-stone-100 py-4 rounded-ss-md rounded-se-md
                px-6">
                    <span className="text-black">Cash money </span>
                </div>

                <div className="bg-stone-100 text-[13px] p-5 space-y-0.5 border border-gray-200 rounded-ee-md text-black">
                    <p>Purchase with cash</p>
                    <p>Cash money</p>
                    <p>Promo code: 1245335543</p>
                    <p>method of payment: Cash</p>
                    <p>{formatPrice(totalAmount)}</p>

                </div>

            </div>

            <div className="flex flex-col gap-6">
                <h3 className="font-semibold text-3xl text-slate-950">
                    Summary
                </h3>

                {/* aqui van la lista de elementos del carrito */}

                <ItemsCheckout/>

            </div>

            <button 
            className="bg-black text-white py-3.5 font-bold tracking-wide rounded-md mt-2"
            type="submit"
            >
            finalize the purchase
            </button>
            </form>

        </div>
    )
}
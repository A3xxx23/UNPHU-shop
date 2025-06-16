import { zodResolver } from "@hookform/resolvers/zod"
import { type AddressFormValues, addressSchema } from "../../lib/validators"
import { InputAddress } from "./InputAddress"
import { useForm } from "react-hook-form"
import { ItemsCheckout } from "./ItemsCheckout"
import { useCartStore } from "../../store/cart.store"
import { useCreateOrder } from "../../hooks"
import { Loader } from "../shared/Loader"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

export const FormCheckout = () => {
    const stripe = useStripe();
    const elements = useElements();

    const {
        register, 
        formState: { errors }, 
        handleSubmit
    } = useForm<AddressFormValues>({
        resolver:zodResolver(addressSchema),
    });

    //enviando la mutacion de create order

    const onSubmit = handleSubmit(async (data) => {
  if (!stripe || !elements) return;

  // Crear PaymentIntent en backend con totalAmount
  const response = await fetch('/.netlify/functions/create-payment-intent', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ amount: totalAmount * 100 }), // en centavos
  });

  if (!response.ok) {
      throw new Error('Failed to create PaymentIntent');
    }

  const { clientSecret } = await response.json();
  console.log("Client Secret:", clientSecret);

  // Confirmar el pago con los datos de la tarjeta
  const cardElement = elements.getElement(CardElement);
  if (!cardElement) return;

  const paymentResult = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: cardElement,
      billing_details: {
        address: {
          line1: data.addressLine1,
          line2: data.addressLine2,
          city: data.city,
          state: data.state,
          postal_code: data.postalCode,
          country: data.country,
        },
      },
    },
  });

  if (paymentResult.error) {
    alert(paymentResult.error.message);
  } else {
    if (paymentResult.paymentIntent.status === 'succeeded') {
      // Guardar la orden en la BD
      const orderInput = {
        address: data,
        cartItems: cartItems.map(item => ({
          variantId: item.variantId,
          quantity: item.quantity,
          price: item.price,
        })),
        totalAmount,
        paymentId: paymentResult.paymentIntent.id,
        paymentStatus: paymentResult.paymentIntent.status,
      };

      createOrder(orderInput, {
        onSuccess: () => {
          cleanCart();
        }
      });
    }
  }
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
                <div className="flex justify-between items-center text-sm border bg-stone-100 py-4 rounded-ss-md rounded-se-md
                px-6">
                    <span className="text-black text-xl font-bold">Pay Method </span>
                </div>

                <div className="text-[13px] p-5 space-y-0.5 border border-gray-200 rounded-ee-md text-black">
                   <div className="mb-4">
                    <label className="block mb-2 font-medium">Card details</label>
                    <div className="p-3 border rounded-md">
                        <CardElement options={{hidePostalCode:true}} />
                    </div>
                </div>
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
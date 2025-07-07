// use params Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the routes
//todo lo que pasa por params se convierte en strings(react-router-dom)

import { Link,  useNavigate,  useParams } from "react-router-dom";
import { useOrder, useUser } from "../hooks";
import { Loader } from "../components/shared/Loader";
import { Logo } from "../components/shared/Logo";
import { IconCircleDashedCheck } from "@tabler/icons-react";
import { formatPrice } from "../helpers";
import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";
import ReactConfetti from 'react-confetti';

export const ThankyouPage = () => {

    const { id } = useParams <{id: string}> ();

    const {data, isLoading, isError} = useOrder(Number(id)) as {
        data: {
            customer: { full_name: string; email: string };
            orderItems: { productImage: string; productName: string; price: number; size: string; color_name: string }[];
            totalAmount: number;
            address: { addressLine1: string; addressLine2?: string; city: string; state: string; country: string };
        };
        isLoading: boolean;
        isError: boolean;
    };

    const {isLoading: isLoadingSession} = useUser();
    const [showConfetti, setShowConfetti] = useState(false);
    const navigate = useNavigate();

    //ver si el usuario esta autenticado

    useEffect(() => {
        supabase.auth.onAuthStateChange(async(event, session) => {
            if (event === 'SIGNED_OUT' || !session){
                navigate('/login')
                }
            })
    }, [navigate]);

    useEffect(() => {
        if (data) {
          setShowConfetti(true);
          const timer = setTimeout(() => setShowConfetti(false), 5000); // Mostrar el confetti por 5 segundos
          return () => clearTimeout(timer);
        }
    }, [data]);

    if(isError) return <div className="text-red-500 text-3xl">Order not found</div>;

    if(isLoading || !data || isLoadingSession) return <Loader/>;
     
  return (
    <div className="flex flex-col h-screen">
        {showConfetti && <ReactConfetti />}
        <header className="text-black flex items-center justify-center flex-col py-12">
            <Link to="/" className="self-center">
                <Logo/> 
            </Link>

        </header>

        <main className="w-full max-w-7xl mx-auto px-5 lg:px-12 flex-1 flex flex-col items-center gap-10">
            <div className="flex gap-3 items-center">
                <IconCircleDashedCheck size={40} className="text-black" />

                <p className="text-4xl text-black">
                    Thank you, {data.customer.full_name}!
                </p>

            </div>

            <div className="w-full border border-slate-200 p-5 rounded-md space-y-3 md:w-[600px]">
                <h3 className="font-medium text-3xl text-stone-950">Your order has been confirmed </h3>

                <p className="text-sm text-stone-800">Thank you for your order in A&N E-commerce. For payments via transfer we share the following information with you</p>

                <div className="space-y-0.5 text-sm text-stone-950">
                    <p>Purchase with Credit Card</p>
                    <p>Promo code: 1245335543</p>
                    <p>Total amount: {formatPrice(data.totalAmount)}</p>
                    <p>Client: {data.customer.full_name}</p>
                </div>

                <p className="text-sm text-stone-800"> 
                if you have any questions about your order, please contact us at <Link to={'/Contact Us'} className="font-bold"> 
                <strong>angelemilioaquino6@gmail.com</strong></Link>
                </p>
            </div>

            <div className="w-full border border-slate-200 p-5 rounded-md space-y-3 md:w-[600px]">
                <h3 className="font-semibold text-sm text-stone-950">
                    Detail for your orders
                </h3>

                <div className="flex flex-col gap-5">
                    <ul className="space-y-3">
                    {data.orderItems.map((item, index) => (
                            <li 
                            key={index}
                            className="flex justify-between items-center gap-3"
                            >
                                <div className="flex">
                                    <img 
                                    src={item.productImage} 
                                    alt={item.productName}
                                    className="w-16 h-16 object-contain"
                                    />

                                </div>

                                <div className="flex-1 space-y-2">
                                    <div className="flex justify-between">
                                        <p className="font-semibold text-stone-950">
                                            {item.productName}
                                        </p>

                                        <p className="text-sm text-stone-600 mt-1 font-medium">
                                            {formatPrice(item.price)}

                                        </p>
                                    </div>

                                    <div className="flex gap-3 ">
                                        <p className="text-[13px] text-stone-600">
                                            {item.size} / {item.color_name}

                                        </p>

                                    </div>

                                </div>

                            </li>
                        ))}
                    </ul>

                    <div className="flex justify-between">
                        <span className="font-semibold text-stone-950">
                            Total:
                        </span>
                        <span className="font-semibold text-stone-950">
                            {formatPrice(data.totalAmount)}
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col text-sm">
                        <p className="font-semibold text-stone-950">
                         Contact information:
                        </p>
                        <p className="text-stone-500 text-sm">{data.customer.email}</p>
                    </div>

                    <div className="flex flex-col text-sm">
                        <p className="font-semibold text-stone-950">
                            Method of payment:
                        </p>

                        <p className="text-stone-500 text-sm">
                        Credit Card - {formatPrice(data.totalAmount)}
                        </p>
                    </div>

                    <div className="flex flex-col text-sm">
                        <p className="font-semibold text-stone-950">Shipping address</p>
                        <p>{data.address.addressLine1}</p>

                        <p className="text-stone-500 text-sm"> {data.address.addressLine2 &&  data.address.addressLine2}</p>
                        <p className="text-stone-500 text-sm">{data.address.city}</p>
                        <p className="text-stone-500 text-sm">{data.address.state}</p>
                        <p className="text-stone-500 text-sm">{data.address.country}</p>
                    </div>

                    <div className="flex flex-col text-sm">
                        <p className="font-semibold text-stone-950">Method of delivery</p>
                        <p className="text-stone-500 text-sm">Standard</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-between items-center w-full mb-5 gap-3 sm:flex-row md:w-[600px] md:gap-0">
                <p className="text-sm text-stone-950">
                Need help? <Link to='/Contact Us' className="text-stone-950 underline hover:text-stone-500">Contact us</Link>
                </p>

                <Link
                to='/Shop All'
                className="text-white bg-black py-4 text-sm rounded-md px-5 tracking-tight font-semibold"
                >
                    Go shopping
                </Link>

            </div>

        </main>
      
    </div>
  );
};
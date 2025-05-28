import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../components/shared/Logo";
import { useCartStore } from "../store/cart.store";
import { FormCheckout } from "../components/checkout/FormCheckout";
import { ItemsCheckout } from "../components/checkout/ItemsCheckout";
import { useUser } from "../hooks";
import { Loader } from "../components/shared/Loader";
import { useEffect } from "react";
import { supabase } from "../supabase/client";

export const CheckoutPage = () => {

    const totalItems = useCartStore(state => state.totalItemsInCart);

    const {isLoading} = useUser();

    const navigate = useNavigate();

    //ver si el usuario esta autenticado

    useEffect(() => {
        supabase.auth.onAuthStateChange(async(event, session) => {
            if (event === 'SIGNED_OUT' || !session){
                navigate('/login')
                }
            })
    }, [navigate]);

    if(isLoading) return <Loader/>;


    return (
        <div 
        style={{
            minHeight: 'calc(100vh - 100px)',
        }}
        >
            <header className="h-[100px] bg-white text-black flex justify-center items-center flex-col px-10 border-b border-slate-200">
                <Link to="/" className="md:self-start">
                     <Logo/> 
                </Link>

            </header>

            <main className="w-full h-full flex relative">
                {
                    totalItems === 0 ? (
                        <div
                        className="flex flex-col items-center justify-center gap-5 w-full"
                        style={{
                            minHeight: 'calc(100vh - 100px)',
                        }}
                        >
                        <p className="text-sm font-medium tracking-tight text-slate-500">
                            Cart is empty
                        </p>

                        <Link
                        to='/shop all'
                        className="py-4 bg-black text-white rounded-full px-7 text-xs uppercase tracking-widest font-semibold"
                        >
                        Go shopping
                        </Link>
                        </div>
                    ) : (
                        <>
                           <div className="w-full md:w-[50%] p-10">
                            {/* Checkout Form direction*/}
                            <FormCheckout/>

                           </div>

                           <div
                           className="bg-stone-100 w-[50%] sticky top-0 right-0 p-10 hidden md:block"
                           style={{
                            minHeight: 'calc(100vh - 100px)',
                           }}
                           >
                            {/* items del carrito */}

                            <ItemsCheckout/>


                           </div>
                        
                        </>
                    )
                }

            </main>
            
        </div>
    );
};
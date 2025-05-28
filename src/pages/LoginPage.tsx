
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useLogin, useUser } from "../hooks";
import { Loader } from "../components/shared/Loader";

export const LoginPage = () => {

  //state para el email y password

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { mutate, isPending } = useLogin();
  const {session, isLoading} = useUser();

  //funcion para manejar el submit del formulario

  const onLogin = (e: React.FormEvent) => {
    e.preventDefault();

    mutate ({email, password});
  }

  if(isLoading) return <Loader/>;

  if(session) return <Navigate to='/' />;

  return (
    <div className="h-full flex flex-col mt-12 gap-5 items-center">
        <h1 className="text-4xl font-bold capitalize text-black">
            Login
        </h1>

        <p className="text-sm font-medium text-black">
            Please login to your account
        </p>

        {
          isPending ? (
            <Loader />

          ) : (
            <>
          <form className="flex flex-col items-center gap-4 w-full mt-10 sm:w-[400px] lg:w-[500px]" onSubmit={onLogin} >
            <input 
            type="email" 
            placeholder="Enter your email"
            className="border border-slate-200 text-black px-5 py-4 placeholder:text-gray-600 text-sm rounded-full w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

            <input 
            type="password" 
            placeholder="Enter your password"
            className="border border-slate-200 text-black px-5 py-4 placeholder:text-gray-600 text-sm rounded-full w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />

            <button className="bg-black text-white uppercase font-semibold tracking-widest text-xs py-4 rounded-full w-full mt-5">
            Login
            </button>

          </form>

          <p className="text-sm font-medium text-stone-800">
            Don't have an account? 
            <Link to={"/register"} className="underline ml-2">
              Register
            </Link>
          </p>
        </>
          )
        }

    </div>
  );
};
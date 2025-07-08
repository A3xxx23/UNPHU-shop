import { Link } from "react-router-dom"

export const Hero = () => {
    return (
        <div>
    <div className="flex flex-col items-center justify-center w-full py-32">
        <h1 className="text-6xl animate-fade-in animate-delay-200 font-bold text-center animate-text-gradient inline-flex bg-gradient-to-r from-[#6dbd6b] via-[#439441] to-[#439441] bg-[200%_auto] bg-clip-text leading-tight text-transparent  dark:via-[#439441]  dark:to-[#439441]">Bienvenido a UNPHU Shop</h1>
        <p className="text-lg font-normal mt-2 text-center leading-6 text-black ">El mejor sitio para encontrar tus productos favoritos. ¡Comienza a comprar ahora mismo!</p>
        <div className="mt-10 flex gap-4">
        <Link to="/Shop All">
                <button className="inline-flex items-center justify-center text-sm font-medium bg-[#439441] rounded-full bg-secondary text-secondary-foreground hover:bg-[#388336] transition-all h-10 px-4 py-2">
                    Ir a tienda
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="pl-0.5">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                    </svg>
                </button>
        </Link>
            <Link to="/about">
            <button className="inline-flex items-center justify-center text-sm font-medium bg-[#439441] rounded-full bg-secondary text-secondary-foreground hover:bg-[#388336] h-10 px-4 py-2"> Acerca de</button>
            </Link>
        </div>
    </div>
    </div> 
    )
}
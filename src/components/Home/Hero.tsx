import { Link } from "react-router-dom"

export const Hero = () => {
    return (
        <div>
    <div className="flex flex-col items-center justify-center w-full py-32">
        <h1 className="text-6xl animate-fade-in animate-delay-200 font-bold text-center animate-text-gradient inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent  dark:via-slate-400 dark:to-neutral-400">Welcome to A & N Ecommerce</h1>
        <p className="text-lg font-normal mt-2 text-center leading-6 text-black ">The best place to shop online</p>
        <div className="mt-10 flex gap-4">
        <Link to="/Shop All">
                <button className="inline-flex items-center justify-center text-sm font-medium bg-gray-600 rounded-full bg-secondary text-secondary-foreground hover:bg-slate-400 transition-all h-10 px-4 py-2">
                    Go to shop
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="pl-0.5">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                    </svg>
                </button>
        </Link>
            <Link to="/about">
            <button className="inline-flex items-center justify-center text-sm font-medium bg-gray-600 rounded-full bg-secondary text-secondary-foreground hover:bg-slate-400 h-10 px-4 py-2"> About Us</button>
            </Link>
        </div>
    </div>
    </div> 
    )
}
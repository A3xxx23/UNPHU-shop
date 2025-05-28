import { Link, NavLink } from "react-router-dom";
import { useGlobalStore } from "../../store/global.store";
import { IconX } from "@tabler/icons-react";
import { LogoNav } from "./logoNav";
import { navbarLinks } from "../../constants/links";

export const NavbarMobile = () => {
  const setActiveNavMobile = useGlobalStore(state => state.setActiveNavMobile);
  
    return (
        <div className="bg-white fixed py-32 text-black h-screen w-full shadow-lg animate-slide-in-left delay-1000 z-50 flex justify-center">
            <button
            className="absolute top-5 right-5"
            onClick={() => setActiveNavMobile(false)}
            >
                <IconX size={30} className="text-black hover:text-slate-800 cursor-pointer"/>
            </button>

            {/*contenido del navbar */}
            <div className="flex flex-col gap-16">
                <Link
                to='/'
                onClick={() => setActiveNavMobile(false)}
                >
                    <LogoNav/>
                
                </Link>

                <nav className="flex flex-col items-center gap-5">
                    {
                        navbarLinks.map(link => (
                            <NavLink
                            to={link.href}
                            key={link.id}
                            className={({isActive}) =>`
                            ${isActive ? 'text-slate-950 underline' : ''} transition all duration-300 
                            font-semibold text-xl hover:underline} 
                            `}
                            
                            >{link.title}

                            </NavLink>
                        ))
                    }

                </nav>

            </div>

        </div>
    ) 
};
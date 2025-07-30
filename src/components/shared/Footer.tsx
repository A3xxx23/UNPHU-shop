import { Logo } from "./Logo";
import { Link } from "react-router-dom";
import { SocialLinks } from "../../constants/links";

export const Footer = () => {
    return (
        <footer className="py-16 flex px-4 justify-between flex-wrap gap-8 bg-black text-white text-sm mt-10"> 
            <div className="flex items-center">
                <Logo/>
            </div>

            <div className="flex flex-col gap-2">
                <h4 className="text-lg font-bold uppercase">Compañía</h4>
                <Link to="/" className="hover:text-gray-300">Inicio</Link>
                <Link to="/about" className="hover:text-gray-300">Acerca de</Link>
                <Link to="/Contact us" className="hover:text-gray-300">Contacto</Link>
                <Link to="/Shop All" className="hover:text-gray-300">Comprar</Link>
            </div>

            <div className="flex flex-col gap-2">
                <h4 className="text-lg font-bold uppercase">Apoyo</h4>
                <Link to="/faq" className="hover:text-gray-300">Preguntas Frecuentes</Link>
                <Link to="/shipping" className="hover:text-gray-300">Envio</Link>
                <Link to="/returns" className="hover:text-gray-300">Devoluciones</Link>
            </div>

            <div className="flex flex-col gap-2">
                <h4 className="text-lg font-bold uppercase">Sígueme</h4>
                <p className="text-gray-300"> Sígueme para más proyectos</p>
                <div className="flex gap-2">
                    {SocialLinks.map((link) => (
                        <a 
                            key={link.id} 
                            href={link.href} 
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-gray-300 border border-gray-100 w-10 h-10 flex items-center justify-center rounded-full transition-all"
                        >
                            <link.icon className="w-6 h-6" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

import { NewLogo } from "./NewLogo";
import { Link } from "react-router-dom";
import { SocialLinks } from "../../constants/links";

export const Footer = () => {
    return (
        <footer className="py-16 flex px-4 justify-between flex-wrap gap-8 bg-black text-white text-sm mt-10"> 
            <div className="flex items-center">
                <NewLogo/>
            </div>

            <div className="flex flex-col gap-2">
                <h4 className="text-lg font-bold uppercase">Company</h4>
                <Link to="/about" className="hover:text-gray-500">About Us</Link>
                <Link to="/Contact us" className="hover:text-gray-500">Contact Us</Link>
                <Link to="/Shop All" className="hover:text-gray-500">Shop All</Link>
            </div>

            <div className="flex flex-col gap-2">
                <h4 className="text-lg font-bold uppercase">Support</h4>
                <Link to="/faq" className="hover:text-gray-300">FAQ</Link>
                <Link to="/shipping" className="hover:text-gray-500">Shipping</Link>
                <Link to="/returns" className="hover:text-gray-500">Returns</Link>
            </div>

            <div className="flex flex-col gap-2">
                <h4 className="text-lg font-bold uppercase">Follow Me</h4>
                <p className="text-gray-300"> Follow me for more projects</p>
                <div className="flex gap-2">
                    {SocialLinks.map((link) => (
                        <a 
                            key={link.id} 
                            href={link.href} 
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-gray-500 border border-gray-500 w-10 h-10 flex items-center justify-center rounded-full transition-all"
                        >
                            <link.icon className="w-6 h-6" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

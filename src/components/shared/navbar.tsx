import { NavLink } from "react-router-dom";
import { navbarLinks } from "../../constants/links";
import { IconSearch, IconShoppingCart, IconUser,IconMenu2, IconUserCheck } from '@tabler/icons-react';
import { Logo } from "./Logo";
import { Link } from "react-router-dom";
import { useGlobalStore } from "../../store/global.store";
import { useCartStore } from "../../store/cart.store";
import { useUser } from "../../hooks";
import { Loader } from "./Loader";

export const Navbar = () => {

  //funcion para el navbar en responsive

  const setActiveNavMobile = useGlobalStore(state => state.setActiveNavMobile);


  // Funcion para abrir el sheet tocando el icono de buscar y el de carrito

  const openSheet = useGlobalStore(state => state.openSheet);

  const totalItemsInCart = useCartStore(state => state.totalItemsInCart);

  const {session, isLoading} = useUser();

  const userId = session?.user.id;
  


  return (
    <div>
      <header className='flex justify-between items-center py-4 px-5 lg:px-12'>

        <Logo/>

        <nav className='space-x-5 hidden md:flex'>
        
          {navbarLinks.map((link) => (
            <NavLink 
              key={link.id} 
              to={link.href} 
              className={({ isActive }) => 
                isActive 
                  ? 'text-black hover:text-gray-600 transition mx-2' 
                  : 'text-black hover:text-gray-500 transition mx-2'
              }
            >
              {link.title}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-5 mr-24 md:mr-0 "> 
          <button onClick={() => openSheet('search')}>
            <IconSearch stroke={1.5} width={25} height={25} className="text-black"/>
          </button>

          {
            isLoading ? (
              <Loader/>

            ) : session ? (
            <div className="relative">
               <Link to="/account">
                  <IconUserCheck stroke={1.5} size={25} className="text-black" />
               </Link>
            </div>

            ) : (
              <Link to="/login">
                <IconUser stroke={1.5} size={25} className="text-black" />
              </Link>

            )
          }

          <button className="relative" 
          onClick={() => openSheet('cart')}>
            <span className="absolute top-[-5px] right-[-10px] h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
              {totalItemsInCart}
            </span>
            <IconShoppingCart stroke={1.5} width={25} height={25} className="text-black"/>
          </button>
        </div>

        <button className="md:hidden" onClick={() => setActiveNavMobile(true)}>
            <IconMenu2 stroke={1.5} width={25} height={25} className="text-black"/>

        </button>
      </header>
    </div>
  );
};



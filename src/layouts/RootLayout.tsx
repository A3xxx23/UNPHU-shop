// src/layouts/RootLayout.js
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/shared/navbar'; 
import { Footer } from '../components/shared/Footer';
import { Hero } from '../components/Home/Hero';
import { Sheet } from '../components/shared/Sheet';
import { useGlobalStore } from '../store/global.store';
import { NavbarMobile } from '../components/shared/NavbarMobile';


export const RootLayout = () => {
  const {pathname} = useLocation();

  const isSheetOpen = useGlobalStore(state => state.isSheetOpen);
  const activeNavMobile = useGlobalStore(state => state.activeNavMobile);

  return (
    <div className='h-screen flex flex-col'>
      <Navbar />

      {pathname === '/' && <Hero/>}

      <main className='container mx-auto my-8 flex-1'>
      <Outlet />
      </main>

      {isSheetOpen && <Sheet/>}

      {activeNavMobile && <NavbarMobile/>}


      <Footer/>
    </div>
  );
};


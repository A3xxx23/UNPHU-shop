import { useEffect, useRef } from "react";
import { useGlobalStore } from "../../store/global.store";
import { Cart } from "./Cart";
import { Search } from "./Search";


export const Sheet = () => {

    const sheetContent = useGlobalStore(state => state.sheetContent);
    const closeSheet = useGlobalStore(state => state.closeSheet);

    const sheetRef = useRef<HTMLDivElement | null>(null);

    ///use effect para cerrar el sheet cuando el usuario hace click fuera del mismo

    useEffect(()=> {
        document.body.style.overflow = 'hidden';

        //funcion para los click fuera del sheet

        const handleClickOutside = (event: MouseEvent) => {
            if (
                sheetRef.current &&
                !sheetRef.current.contains(event.target as Node)
            ) {
                closeSheet();
            }
        };

        //agregar event listener para cerrar el sheet cuando se hace click en el body

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.body.style.overflow = 'unset';
            document.removeEventListener('mousedown', handleClickOutside);
        } 

    }, [closeSheet]);


    ///funcion para saber cual de todos los componentes debe ser renderizado

    const renderContent = () => {
        switch (sheetContent) {
            case 'cart':
                return <Cart/>;
            case 'search':
                return <Search/>;
            default:
                return null;
        }
        
    }


    return (
    <div className="fixed inset-0 bg-opacity-50 z-50 flex justify-end animate-fade-in-left delay-200">
        <div
        ref={sheetRef}
        className="bg-white text-black h-screen w-[500px] md:w-[50%] shadow-lg animate-slide-in-left"
        >
            {renderContent()}

        </div>
    </div>
    );
};
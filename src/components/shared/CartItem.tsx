//carrito con zustand
import { motion } from "framer-motion";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { formatPrice } from "../../helpers";
import { useCartStore } from "../../store/cart.store";

export interface IcartItem{
    variantId: string;
    productId: string;
    name: string;
    color: string;
    size: string;
    quantity: number;
    price: number;
    image: string;
}

interface Props {
    item: IcartItem;
}

export const CartItem = ({item}: Props) => {

    const removeItem = useCartStore(state => state.removeItem);
    const updateQuantity = useCartStore(state => state.updateQuantity);

    {/* Agregar la funcion de incrementar y decrementar la cantidad de productos en el carrito*/}

    const increment = () => {
        updateQuantity(item.variantId, item.quantity + 1);
    }

    const decrement = () => {
        if(item.quantity > 1){
            updateQuantity(item.variantId, item.quantity - 1);
        }

    }



    return (
        <motion.li
          layout
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="flex justify-between items-center gap-5"
        >
          <div className="flex">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-contain"
            />
          </div>
      
          <div className="flex-1 space-y-3">
            <div className="flex justify-between">
              <p className="font-semibold text-black">{item.name}</p>
              <p className="text-sm font-medium text-gray-600 mt-1">
                {formatPrice(item.price * item.quantity)}
              </p>
            </div>
      
            <div className="flex gap-3">
              <p className="text-[13px] text-gray-600">
                {item.size} / {item.color}
              </p>
            </div>
      
            <div className="flex gap-4">
              <div className="flex items-center gap-5 px-2 border border-slate-200 w-fit rounded-full">
                <button onClick={decrement} disabled={item.quantity === 1}>
                  <IconMinus size={15} className="text-black" />
                </button>
                <span className="text-slate-500 text-sm">{item.quantity}</span>
                <button onClick={increment}>
                  <IconPlus size={15} className="text-black" />
                </button>
              </div>
      
              <button
                className="underline font-medium text-[10px]"
                onClick={() => removeItem(item.variantId)}
              >
                Delete
              </button>
            </div>
          </div>
        </motion.li>
      );
}      
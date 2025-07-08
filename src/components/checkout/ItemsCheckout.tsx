import { formatPrice } from "../../helpers";
import { useCartStore } from "../../store/cart.store";

export const ItemsCheckout = () => {
    const cartItems = useCartStore(state => state.items);
    const totalAmount = useCartStore(state => state.totalAmount);

    return (
      <div>
        <ul className="space-y-5">
          {cartItems.map((item) => (
            <li
              key={item.variantId}
              className="flex justify-between items-center gap-5"
            >
              <div className="flex relative border border-stone-300 bg-stone-200 rounded-md">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-contain"
                />
                <span
                  className="w-5 h-5 rounded-full bg-gray-500 text-white flex items-center justify-center 
                            text-xs absolute -right-1 -top-2 font-medium"
                >
                  {item.quantity}
                </span>
              </div>

              <div className="flex-1 space-y-3">
                <div className="flex justify-between">
                  <p className="font-semibold text-stone-950">{item.name}</p>
                  <p className="font-medium text-sm text-stone-600 mt-2">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </div>
                <div className="flex gap-3">
                  <p className="text-[13px] text-gray-600">
                    {item.size} / {item.color}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-4 p-7 space-y-5">
          <div className="flex justify-between">
            <p className="text-sm font-medium text-stone-700">Envío</p>
            <p className="text-sm font-medium text-stone-600 uppercase">
              Gratis
            </p>
          </div>

          <div className="flex justify-between font-semibold text-lg">
            <p className="text-black">Total:</p>
            <p className="text-black">{formatPrice(totalAmount)}</p>
          </div>
        </div>
      </div>
    );
};

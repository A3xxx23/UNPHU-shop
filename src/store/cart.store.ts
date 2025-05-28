import { StateCreator, create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { IcartItem } from "../components/shared/CartItem";

// Tipado del estado del carrito
export interface CartState {
    items: IcartItem[];
    totalAmount: number;
    totalItemsInCart: number;  // Mantener esta propiedad

    addItem: (item: IcartItem) => void;
    removeItem: (variantId: string) => void;
    updateQuantity: (variantId: string, quantity: number) => void;
    clearCart: () => void;
}

// Inicialización del estado del carrito
const storeApi: StateCreator<CartState> = (set) => ({
    items: [],
    totalAmount: 0,
    totalItemsInCart: 0,  // Inicializa la propiedad con 0

    // Limpiar el carrito
    clearCart: () => {
        set({ items: [], totalAmount: 0, totalItemsInCart: 0 });
    },

    // Agregar un ítem al carrito
    addItem: (item: IcartItem) => {
        set((state) => {
            const existingItemIndex = state.items.findIndex(
                (i) => i.variantId === item.variantId
            );

            let updatedItems;

            if (existingItemIndex >= 0) {
                updatedItems = state.items.map((i, index) =>
                    index === existingItemIndex
                        ? { ...i, quantity: i.quantity + item.quantity }
                        : i
                );
            } else {
                updatedItems = [...state.items, item];
            }

            const newTotalAmount = updatedItems.reduce(
                (acc, i) => acc + i.quantity * i.price,
                0
            );

            const newTotalItems = updatedItems.reduce(
                (acc, i) => acc + i.quantity,
                0
            );

            return {
                items: updatedItems,
                totalAmount: newTotalAmount,
                totalItemsInCart: newTotalItems, // Actualiza el total de items
            };
        });
    },

    // Eliminar un ítem del carrito
    removeItem: (variantId) => {
        set((state) => {
            const updatedItems = state.items.filter(
                (i) => i.variantId !== variantId
            );

            const newTotalAmount = updatedItems.reduce(
                (acc, i) => acc + i.quantity * i.price,
                0
            );

            const newTotalItems = updatedItems.reduce(
                (acc, i) => acc + i.quantity,
                0
            );

            return {
                items: updatedItems,
                totalAmount: newTotalAmount,
                totalItemsInCart: newTotalItems, // Actualiza el total de items
            };
        });
    },

    // Actualizar la cantidad de un ítem
    updateQuantity: (variantId, quantity) => {
        set((state) => {
            const updatedItems = state.items.map((i) =>
                i.variantId === variantId ? { ...i, quantity } : i
            );

            const newTotalAmount = updatedItems.reduce(
                (acc, i) => acc + i.quantity * i.price,
                0
            );

            const newTotalItems = updatedItems.reduce(
                (acc, i) => acc + i.quantity,
                0
            );

            return {
                items: updatedItems,
                totalAmount: newTotalAmount,
                totalItemsInCart: newTotalItems, // Actualiza el total de items
            };
        });
    },
});

// Exportar el store del carrito y agregar persistencia

export const useCartStore = create<CartState>()(
    devtools(
        persist(storeApi, {
            name: "cart-storage", 
        }),
    )
);

import { create } from "zustand";

interface CartItem {
  variantId: string;
  productId: string;
  name: string;
  image: string;
  color: string;
  price: number;
  size: string;
  quantity: number;
}

type SheetContent = 'cart' | 'search' | null;

export interface GlobalState {
  cartItems: CartItem[];
  totalItemsInCart: number;
  isSheetOpen: boolean;
  sheetContent: SheetContent;
  activeNavMobile: boolean;
  openSheet: (content: SheetContent) => void;
  closeSheet: () => void;
  setActiveNavMobile: (active: boolean) => void;
  addItem: (item: CartItem) => void;
  clearCart: () => void;
}

export const useGlobalStore = create<GlobalState>((set) => ({
  cartItems: [],
  totalItemsInCart: 0,
  isSheetOpen: false,
  sheetContent: null,
  activeNavMobile: false,

  setActiveNavMobile: (active) => {
    set({ activeNavMobile: active });
  },

  openSheet: (content) => {
    set({ isSheetOpen: true, sheetContent: content });
  },

  closeSheet: () => {
    set({ isSheetOpen: false, sheetContent: null });
  },

  addItem: (item) => {
    set((state) => {
      const existingItem = state.cartItems.find((cartItem) => cartItem.variantId === item.variantId);
      let newCart;
      if (existingItem) {
        newCart = state.cartItems.map((cartItem) =>
          cartItem.variantId === item.variantId
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        newCart = [...state.cartItems, { ...item, quantity: 1 }];
      }
      return {
        cartItems: newCart,
        totalItemsInCart: newCart.reduce((sum, item) => sum + item.quantity, 0),
      };
    });
  },

  clearCart: () => {
    set({ cartItems: [], totalItemsInCart: 0 });
  },
}));


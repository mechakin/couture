import { toast } from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { CartProduct } from "@/types";

type CartStore = {
  items: CartProduct[];
  addItem: (data: CartProduct) => void;
  removeItem: (id: string, sizeId: string) => void;
  removeAll: () => void;
};

// TODO: change cart so it adds existing items and removes items correctly

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: CartProduct) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(
          (item) =>
            item.id === data.id && item.selectedSize.id === data.selectedSize.id
        );

        if (existingItem) return toast.error("Item already in cart.");

        set({ items: [...get().items, data] });
        toast.success("Item added to cart.");
      },
      removeItem: (id: string, sizeId: string) => {
        set({
          items: [
            ...get().items.filter(
              (item) => item.id !== id || item.selectedSize.id !== sizeId
            ),
          ],
        });
        toast.success("Item removed from cart.");
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;

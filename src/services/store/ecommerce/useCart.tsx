import { CartItem, Product } from '@/src/models'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type State = {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  increaseItemCount: (product: Product) => void;
  decreaseItemCount: (product: Product) => void;
}

const PERSIST_CONFIG = {
  name: "interview-shop-cartStorage"
}

export const useCart = create<State>()(
  persist(
    (set, get) => ({
      cartItems: [],

      addToCart: (product) => set(() => ({
        cartItems: [
          ...get().cartItems,
          {
            product: product,
            count: 1,
            created_at: new Date().toISOString()
          }
        ]
      })),

      removeFromCart: (product) => set(() => ({
        cartItems: get().cartItems.filter((item: CartItem) => item.product.id !== product.id)
      })),

      increaseItemCount: (product) => set(() => {
        const item = get().cartItems.find((item: CartItem) => item.product.id === product.id) as CartItem;
        return {
          cartItems: [
            ...get().cartItems.filter((item: CartItem) => item.product.id !== product.id),
            {
              ...item,
              count: item.count + 1
            }
          ]
        }
      }),

      decreaseItemCount: (product) => set(() => {
        const item = get().cartItems.find((item: CartItem) => item.product.id === product.id) as CartItem;
        return {
          cartItems: [
            ...get().cartItems.filter((item: CartItem) => item.product.id !== product.id),
            {
              ...item,
              count: item?.count - 1
            }
          ]
        }
      }),
    }), PERSIST_CONFIG
  ),
)

export default useCart;
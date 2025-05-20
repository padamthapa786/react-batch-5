import { create } from "zustand";

export const useCart = create((set) => ({
  cartCount: 0,
  cartItem: [],

  addTocart: (item) =>
    set((state) => {
      const updatecart = [...state.cartItem, item];
      //local

      return {
        cartItem: updatecart,
        cartCount: updatecart.length,
      };
    }),
    
    // removecart: ()=> set((state)=> {

    // })

}));

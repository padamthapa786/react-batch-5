import { create } from "zustand";


//product store
const useStore = create((set)=>({
    count:0,
    cart:[],
    addCart: (item)=>set((state)=>{
        const updatedCart = [...state.cart, item]
        
        return {
            cart:updatedCart,
            count:updatedCart.length
        }
    }),
    removeCart: (id)=> set((state)=> {
        const updatedCart = state.cart.filter((item)=> item.id !== id);
        return {
            cart:updatedCart,
            count:updatedCart.length
        }
    })
}))
export default useStore;
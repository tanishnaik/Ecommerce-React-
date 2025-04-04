import {createContext } from "react";
import { useContext } from "react";
import { useReducer } from "react";
import { cartReducer } from "../Reducers/cartReducer";
const CartContext=createContext();
const CartProvider=({children})=>{
    console.log();
    const initialState={
        cart:JSON.parse(localStorage.getItem('cart'))||[],
        wishlist:JSON.parse(localStorage.getItem('wishlist'))||[],
    }
    const [{cart,wishlist},cartDispatch]=useReducer(cartReducer,initialState);
    return (
        <CartContext.Provider value={{cart,wishlist,cartDispatch}}>
            {children}
        </CartContext.Provider>
    )

}
const useCart=()=>useContext(CartContext);
export {CartProvider,useCart};
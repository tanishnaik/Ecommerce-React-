import {createContext } from "react";
import { useContext } from "react";
import { useReducer } from "react";
import { cartReducer } from "../Reducers/cartReducer";
const CartContext=createContext();
const CartProvider=({children})=>{
    const initialState={
        cart:[],
    }
    const [{cart},cartDispatch]=useReducer(cartReducer,initialState);
    return (
        <CartContext.Provider value={{cart,cartDispatch}}>
            {children}
        </CartContext.Provider>
    )

}
const useCart=()=>useContext(CartContext);
export {CartProvider,useCart};
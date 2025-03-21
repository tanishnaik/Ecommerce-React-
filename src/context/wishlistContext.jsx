import { createContext,useContext,useReducer } from "react";
import { wishListReducer } from "../reducers/wishListReducer";
const WishListContext=createContext();
const WishlistProvider=({children})=>{
    const initialState={
        wishlist:[],

    }
    const [{wishlist},wishlistDispatch]=useReducer(wishListReducer,initialState);
    return (
        <WishListContext.Provider value={{wishlist,wishlistDispatch}}>
            {children}
        </WishListContext.Provider>
    )
}
const useWishList=()=>useContext(WishListContext);
export {WishlistProvider,useWishList}
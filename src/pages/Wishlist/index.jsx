import { Navbar } from "../../Components/Navbar";
import {useWishList} from "../../context/wishlistContext";
export const WishList=()=>{
    const {wishlist}=useWishList();
    return (
        <>
        <Navbar/>
        
        </>
    )
}
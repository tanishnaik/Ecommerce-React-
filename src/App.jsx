import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { Route,Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { WishList } from "./pages/Wishlist";
import { AuthLogin } from "./pages/Auth";

function App() {
  return <>
 <Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/cart" element={<Cart/>}></Route>
  {/* <Route path="/wishlist"element={<Wishlist/>}></Route> */}
  {/* <Route path="/wishlist"element={<WishList/>}></Route> */}
  <Route path="/wishlist" element={<WishList/>}></Route>
  <Route path="/auth/login" element={<AuthLogin/>}></Route>
  
 </Routes>
  </>;
}

export default App;

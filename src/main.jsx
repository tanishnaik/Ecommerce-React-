import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/cartContext.jsx";
import { LoginProvider } from "./context/loginContext.jsx";
// import {WishlistProvider} from "./context/wishlistContext.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <LoginProvider>
        <App />
        </LoginProvider>
        
        
       
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);

import { useCart } from "../../context/cartContext";
import {findProductInCart} from "../../utils/findProductInCart";
import { useNavigate } from "react-router-dom";
export const ProductCard = ({ product }) => {
  const { cart ,cartDispatch } = useCart();
  const isProductInCart=findProductInCart(cart,product.id);
  const navigate=useNavigate();
  const onCartClick = ( product ) => {
    !isProductInCart ?
    cartDispatch({
      type: "ADD_TO_CART",
      payload: { product },
    }) :navigate("/cart")
  };

  return (
    <div className="group relative flex flex-col bg-white shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10 animate-gradient shift"></div>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>
          <div className="absolute w-32 h-32 bg-blue-400/20 rounded-full filter blur-xl animate-float1"></div>
          <div className="absolute w-40 h-40 bg-purple-400/20 rounded-full filter blur-xl animate-float2 top-1/2 left-3/4"></div>
          <div className="absolute w-24 h-24 bg-pink-400/20 rounded-full filter blur-xl animate-float3 top-3/4 left-1/4"></div>
        </div>
      </div>

      {/* Image Container with Zoom Effect */}
      <div className="relative w-full h-48 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <img
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2"
          src={product.images[0]}
          alt={product.title}
        />
        {/* Shiny overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-full group-hover:translate-x-0"></div>

        {/* Wishlist Icon */}
        <button className="absolute top-2 right-2 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md transform transition-all duration-300 hover:scale-110 group/wishlist" onClick={()=>navigate("/wishlist")}>
          <svg
            className="w-5 h-5 fill-gray-400 transition-all duration-300 group-hover/wishlist:fill-red-400"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
      </div>

      {/* Content Container */}
      <div className="p-4 flex flex-col gap-3 relative">
        {/* Floating Price Tag */}
        <div className="absolute -top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-md">
          Rs. {product.price}
        </div>

        {/* Title with reveal effect */}
        <h2 className="text-lg font-semibold text-gray-800 overflow-hidden">
          <span className="block transform transition-all duration-500 translate-y-full group-hover:translate-y-0">
            {product.title}
          </span>
        </h2>

        {/* Description with fade-in */}
        <p className="text-sm text-gray-600 opacity-0 transition-all duration-500 group-hover:opacity-100 line-clamp-2">
          {product.description}
        </p>

        {/* Animated Button */}
        <button
          onClick={() => onCartClick(product)}
          className="mt-2 flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg overflow-hidden relative group/button"
        >
          <span className="material-symbols-outlined text-xl transition-transform duration-300 group-hover/button:scale-125">
          {
            isProductInCart ? 'shopping_cart_checkout':'shopping_cart'
          }
          
           
          </span>

          <span className="relative z-10">
            {
              isProductInCart ? 'Go to Cart' :'Add to Cart'
            }
            </span>
          {/* Button background animation */}
          <div
            className="absolute inset-0 bg-blue-700 
            transform scale-x-0 group-hover/button:scale-x-100 origin-left transition-transform duration-300"
          ></div>
          {/* Ripple effect */}
          <div className="absolute inset-0 bg-white/20 transform scale-0 group-hover/button:scale-150 rounded-full transition-transform duration-500"></div>
        </button>
      </div>
    </div>
  );
};

import { useCart } from "../../context/cartContext";
import {getTotalCartAmount} from "../../utils/getTotalCartAmount";

export const PriceDetails = () => {
  const { cart } = useCart();
  const totalCartAmount=getTotalCartAmount(cart);

  // Calculate total price dynamically (assuming each item has a price property)
  const totalItems = cart.length;
  const subtotal = cart.reduce((sum, item) => sum + (item.price || 0), 0);
  const deliveryCharge = 50; // Example delivery charge
  const totalAmount = subtotal + deliveryCharge;

  return (
    <div className="price-details group bg-gradient-to-br from-gray-900 to-black shadow-2xl rounded-3xl overflow-hidden transform transition-all duration-700 hover:shadow-[0_0_40px_rgba(0,102,255,0.7)] max-w-md mx-auto p-6 relative z-10">
      {/* Epic Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-gradient"></div>
        <div className="absolute w-[150%] h-[150%] -top-1/4 -left-1/4 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-orbit"></div>
        <div className="absolute w-56 h-56 bg-blue-600/30 rounded-full filter blur-3xl animate-pulse1 -top-12 -left-12"></div>
        <div className="absolute w-64 h-64 bg-purple-600/30 rounded-full filter blur-3xl animate-pulse2 top-1/2 right-6"></div>
        <div className="absolute w-48 h-48 bg-pink-600/30 rounded-full filter blur-3xl animate-pulse3 bottom-0 left-1/3"></div>
      </div>

      {/* Title */}
      <div className="mb-4">
        <p className="text-xl font-extrabold text-white tracking-wide transform transition-all duration-700 translate-y-6 group-hover:translate-y-0 group-hover:text-blue-300 group-hover:drop-shadow-[0_0_15px_rgba(0,102,255,0.8)]">
          Price Details
        </p>
      </div>

      {/* Price Breakdown */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-base font-semibold text-gray-200 tracking-wide">
            Price ({totalItems} {totalItems === 1 ? "item" : "items"})
          </p>
          <p className="text-lg font-bold text-blue-400 group-hover:text-blue-300 transition-all duration-500 group-hover:drop-shadow-[0_0_12px_rgba(0,102,255,0.7)]">
            Rs. {subtotal}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-base font-semibold text-gray-200 tracking-wide">
            Delivery Charge
          </p>
          <p className="text-lg font-bold text-blue-400 group-hover:text-blue-300 transition-all duration-500 group-hover:drop-shadow-[0_0_12px_rgba(0,102,255,0.7)]">
            Rs. {deliveryCharge}
          </p>
        </div>
      </div>

      {/* Total Amount */}
      <div className="mt-6 pt-4 border-t border-gray-700/50 flex justify-between items-center">
        <p className="text-lg font-extrabold text-white tracking-wide">
          
        </p>
        <p className="text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(0,102,255,0.8)]">
          Rs. {totalCartAmount} {totalAmount}
          
        </p>
      </div>

      {/* Place Order Button */}
      <div className="mt-6">
        <button className="w-full relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-6 rounded-full flex items-center justify-center gap-3 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,102,255,0.8)] group/btn">
          <svg
            className="w-6 h-6 fill-white transition-all duration-300 group-hover/btn:scale-125 group-hover/btn:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
            viewBox="0 0 24 24"
          >
            <path d="M17 18c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm5-14l-4.24 4.24L4 4l-1 1 4.24 4.24L12 14l4.24-4.24L20 5l-1-1-3.76 3.76L12 4z" />
          </svg>
          <span className="relative z-10 text-lg font-semibold tracking-wide">
            Place Order
          </span>
          <div className="absolute inset-0 bg-blue-50-700 transform scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-500"></div>
          <div className="absolute inset-0 bg-white/30 transform scale-0 group-hover/btn:scale-150 rounded-full transition-transform duration-700"></div>
        </button>
      </div>
    </div>
  );
};
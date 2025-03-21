import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate=useNavigate();
  
  return (
    <Fragment>
      <header className="flex items-center justify-between bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 p-4 px-6 py-3 gap-4 shadow-lg relative overflow-hidden">
        {/* Background animation */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff10_1px,transparent_1px)] bg-[size:20px_20px] animate-pulse opacity-20"></div>

        {/* Title with hover animation */}
        <h1 onClick={()=>navigate("/")} className="text-slate-50 font-extrabold text-3xl relative z-10 group">
          <span className="relative inline-block transition-all duration-500 group-hover:scale-110 group-hover:text-blue-200">
            Ecommerce App
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </span>
        </h1>

        {/* Navigation with animated buttons */}
        <nav className="flex gap-6 relative z-10">
          <button className="group relative p-2" onClick={()=>navigate("/wishlist")} >
            <span className="material-symbols-outlined text-white text-2xl transition-all duration-300 group-hover:scale-125 group-hover:text-pink-300 group-hover:rotate-12">
              favorite
            </span>
            <span className="absolute inset-0 bg-white/10 rounded-full transform scale-0 group-hover:scale-150 transition-transform duration-300"></span>
            <span className="absolute top-0 -right-1 w-2 h-2 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></span>
          </button>

          <button className="group relative p-2" onClick={()=>navigate("/cart")}>
            <span  className="material-symbols-outlined text-white text-2xl transition-all duration-300 group-hover:scale-125 group-hover:text-blue-300 group-hover:rotate-12">
              shopping_cart
            </span>
            <span className="absolute inset-0 bg-white/10 rounded-full transform scale-0 group-hover:scale-150 transition-transform duration-300"></span>
            <span className="absolute top-0 -right-1 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></span>
          </button>

          <button className="group relative p-2">
            <span className="material-symbols-outlined text-white text-2xl transition-all duration-300 group-hover:scale-125 group-hover:text-purple-300 group-hover:rotate-12">
              account_circle
            </span>
            <span className="absolute inset-0 bg-white/10 rounded-full transform scale-0 group-hover:scale-150 transition-transform duration-300"></span>
            <span className="absolute top-0 -right-1 w-2 h-2 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></span>
          </button>
        </nav>
      </header>
    </Fragment>
  );
};
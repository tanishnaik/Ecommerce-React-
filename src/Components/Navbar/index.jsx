import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../context/loginContext";
import { useCart } from "../../context/cartContext";

export const Navbar = () => {
  const navigate = useNavigate();
  // const token = useLogin();
  const {token,loginDispatch}=useLogin();
  const [isAccountDropDownOpen, setisAccountDropDownOpen] = useState(false);
  const {cart}=useCart();
  const {wishlist}=useCart();
  console.log({token});
  const onLoginClick = () => {
    if(token?.access_token){
      navigate("/auth/login");
    }
    else {
      loginDispatch({
        type:"LOGOUT"
      })
      navigate('auth/login');
    }
    
  };

  return (
    <Fragment>
      <header className="flex items-center justify-between bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 p-4 px-6 py-3 gap-4 shadow-lg relative">
        {/* Background animation */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff10_1px,transparent_1px)] bg-[size:20px_20px] animate-pulse opacity-20"></div>

        {/* Title with hover animation */}
        <h1
          onClick={() => navigate("/")}
          className="text-slate-50 font-extrabold text-3xl relative z-10 group cursor-pointer"
        >
          <span className="relative inline-block transition-all duration-500 group-hover:scale-110 group-hover:text-blue-200">
            HOME DECOR
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </span>
        </h1>

        {/* Navigation with animated buttons */}
        <nav className="flex gap-6 relative z-10">
          <button
            className="group relative p-2"
            onClick={() => navigate("/wishlist")}
          >
            <span className="material-symbols-outlined text-white text-2xl transition-all duration-300 group-hover:scale-125 group-hover:text-pink-300 group-hover:rotate-12 absolute">
              favorite
            </span>
            <span className="relative bottom-2 left-5 text-white">{wishlist.length}</span>
          </button>

          <button
            className="group relative p-2"
            onClick={() => navigate("/cart")}
          >
            <span className="material-symbols-outlined text-white text-2xl transition-all duration-300 group-hover:scale-125 group-hover:text-blue-300 group-hover:rotate-12 absolute">
              shopping_cart
            </span>
            <span className="relative bottom-2  left-5 text-white">{cart.length}</span>
          </button>

          {/* Account Button with Dropdown */}
          <button className="group relative p-2">
            <div className="relative">
              <span
                onClick={() => setisAccountDropDownOpen(!isAccountDropDownOpen)}
                className="material-symbols-outlined text-white text-2xl transition-all duration-300 group-hover:scale-125 group-hover:text-purple-300 group-hover:rotate-12 cursor-pointer"
              >
                account_circle
              </span>
              {isAccountDropDownOpen && (
                <div className="absolute bg-green-50">
                  <button onClick={onLoginClick}>
                    {token?.access_token ? "Logout" : "Login"}
                  </button>
                </div>
              )}
            </div>
          </button>
        </nav>
      </header>
    </Fragment>
  );
};

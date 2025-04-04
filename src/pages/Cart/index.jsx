import { Navbar } from "../../Components/Navbar";
import { HorizontalProductCard } from "../../Components/HorizontalProductCard";
import { useCart } from "../../context/cartContext";
import { PriceDetails } from "../../Components/PriceDetails/index";


export const Cart = () => {
  const { cart,wishList } = useCart();
  

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-800 py-8 px-4 md:px-8">
        {/* Stunning Animated Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-titleGlow tracking-wider text-center mb-10 relative">
          <span className="relative z-10">Cart Page</span>
          {/* Glowing Underline Effect */}
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-blue-500 rounded-full transition-all duration-700 group-hover:w-1/2 animate-pulseGlow"></span>
          {/* Neon Particles */}
          <span className="absolute inset-0 -z-10 flex justify-center items-center">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-particle1"></span>
            <span className="w-3 h-3 bg-purple-400 rounded-full animate-particle2"></span>
            <span className="w-2 h-2 bg-pink-400 rounded-full animate-particle3"></span>
          </span>
        </h1>

        {/* Container for Cart Items and Price Details */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Cart Items Section */}
          <div className="flex-1 space-y-6">
            {cart?.length > 0 ? (
              cart.map((product) => (
                <HorizontalProductCard key={product.id} product={product} isPresent={()=>checkitems(wishList,product.id)} />
              ))
            ) : (
              <p className="text-lg text-gray-400 text-center py-10 bg-black/20 rounded-3xl">
                Cart is Empty
              </p>
            )}
          </div>

          {/* Price Details Section */}
          {cart?.length > 0 && (
            <div className="md:w-1/3 w-full sticky top-8 self-start">
              <PriceDetails />
            </div>
          )}
        </div>

        {/* Inline CSS Animations */}
        <style jsx>{`
          @keyframes titleGlow {
            0%, 100% {
              text-shadow: 0 0 10px rgba(0, 102, 255, 0.8), 0 0 20px rgba(147, 51, 234, 0.7), 0 0 30px rgba(236, 72, 153, 0.6);
            }
            50% {
              text-shadow: 0 0 20px rgba(0, 102, 255, 1), 0 0 40px rgba(147, 51, 234, 0.9), 0 0 60px rgba(236, 72, 153, 0.8);
            }
          }

          @keyframes pulseGlow {
            0%, 100% {
              box-shadow: 0 0 5px rgba(0, 102, 255, 0.5);
            }
            50% {
              box-shadow: 0 0 15px rgba(0, 102, 255, 0.8);
            }
          }

          @keyframes particle1 {
            0% {
              transform: translate(0, 0) scale(1);
              opacity: 0.8;
            }
            50% {
              transform: translate(-20px, -15px) scale(1.5);
              opacity: 0.3;
            }
            100% {
              transform: translate(0, 0) scale(1);
              opacity: 0.8;
            }
          }

          @keyframes particle2 {
            0% {
              transform: translate(0, 0) scale(1);
              opacity: 0.8;
            }
            50% {
              transform: translate(15px, -20px) scale(1.8);
              opacity: 0.4;
            }
            100% {
              transform: translate(0, 0) scale(1);
              opacity: 0.8;
            }
          }

          @keyframes particle3 {
            0% {
              transform: translate(0, 0) scale(1);
              opacity: 0.8;
            }
            50% {
              transform: translate(-10px, 20px) scale(1.3);
              opacity: 0.5;
            }
            100% {
              transform: translate(0, 0) scale(1);
              opacity: 0.8;
            }
          }

          .animate-titleGlow {
            animation: titleGlow 3s ease-in-out infinite;
          }

          .animate-pulseGlow {
            animation: pulseGlow 2s ease-in-out infinite;
          }

          .animate-particle1 {
            animation: particle1 4s ease-in-out infinite;
          }

          .animate-particle2 {
            animation: particle2 5s ease-in-out infinite;
          }

          .animate-particle3 {
            animation: particle3 6s ease-in-out infinite;
          }
        `}</style>
      </main>
    </>
  );
};
import { useCart } from "../../context/cartContext";
import { useState } from "react";

const RemoveFromCartIcon = () => (
    <svg
        className="w-6 h-6 fill-white transition-all duration-300 group-hover/btn:fill-red-400 group-hover/btn:drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]"
        viewBox="0 0 24 24"
    >
        <path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7h-1V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v3zm1-3h10v3H7V4zm2 5h6v10H9V9zm2 2v6h2v-6h-2z" />
    </svg>
);

export const HorizontalProductCard = ({ product }) => {
    const { cartDispatch } = useCart();
    
    // Initialize quantity state
    const [quantity, setQuantity] = useState(1);

    const onRemoveClick = (product) => {
        cartDispatch({
            type: "REMOVE_FROM_CART",
            payload: { id: product.id }
        });
    };

    const handleIncrement = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecrement = () => {
        setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    if (!product || !product.images || !product.title || !product.price) {
        return <div className="text-white p-4">Error: Product data is missing or incomplete</div>;
    }

    return (
        <div className="card-horizontal group flex bg-gradient-to-br from-gray-900 to-black shadow-2xl rounded-3xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,102,255,0.7)] max-w-3xl mx-auto relative z-10">
            
            {/* Image Container */}
            <div className="card-hori-image-container relative w-2/5 overflow-hidden">
                <img 
                    className="card-image w-full h-full object-contain p-4 transition-all duration-700 group-hover:scale-110 group-hover:rotate-3 group-hover:drop-shadow-[0_0_20px_rgba(0,102,255,0.8)] relative z-10" 
                    src={product.images[0]} 
                    alt={product.title}
                />
            </div>

            {/* Content Container */}
            <div className="cardName-details flex-1 p-5 flex flex-col gap-4 relative z-10">
                <div className="card-title text-xl font-extrabold text-white tracking-wide">
                    {product.title}
                </div>

                <div className="card-description flex items-center gap-3">
                    <p className="card-price text-2xl font-bold text-blue-400">
                        Rs. {product.price *quantity}
                    </p>
                    <span className="price-strike-through text-sm text-gray-400 line-through bg-gray-700/20 px-2 py-1 rounded-lg">
                        Rs. 2499
                    </span>
                </div>

                {/* Quantity Container */}
                <div className="quantity-container flex items-center gap-3">
                    <p className="q-title text-gray-200 font-semibold">Quantity:</p>
                    <div className="count-container flex items-center gap-1 bg-black/50 rounded-full p-1.5 shadow-[0_0_15px_rgba(0,102,255,0.3)]">
                        <button 
                            onClick={handleDecrement}
                            className="count w-8 h-8 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,102,255,0.6)]"
                        >
                            -
                        </button>
                        <span className="count-value w-10 h-8 flex items-center justify-center text-white text-base font-bold bg-black/70 rounded-full">
                            {quantity}
                        </span>
                        <button 
                            onClick={handleIncrement}
                            className="count w-8 h-8 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,102,255,0.6)]"
                        >
                            +
                        </button>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="cta-btn flex gap-4 mt-3">
                    <button 
                        onClick={() => onRemoveClick(product)}
                        className="button hori-btn relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-2 px-5 rounded-full flex items-center justify-center gap-2 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,102,255,0.8)]"
                    >
                        <RemoveFromCartIcon />
                        <span>Remove From Cart</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

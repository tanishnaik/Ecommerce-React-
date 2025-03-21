// Define the RemoveFromCartIcon separately for clarity
const RemoveFromCartIcon = () => (
    <svg
        className="w-6 h-6 fill-white transition-all duration-300 group-hover/btn:fill-red-400 group-hover/btn:drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]"
        viewBox="0 0 24 24"
    >
        <path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7h-1V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v3zm1-3h10v3H7V4zm2 5h6v10H9V9zm2 2v6h2v-6h-2z" />
    </svg>
);

export const HorizontalProductCard = ({ product }) => {
    // Debug: Log the product prop to ensure it's being passed correctly
    console.log("Product Data:", product);

    // Fallback if product is undefined
    if (!product || !product.images || !product.title || !product.price) {
        return <div className="text-white p-4">Error: Product data is missing or incomplete</div>;
    }

    return (
        <div className="card-horizontal group flex bg-gradient-to-br from-gray-900 to-black shadow-2xl rounded-3xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,102,255,0.7)] max-w-3xl mx-auto relative z-10">
            {/* Epic Background Effects */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-gradient"></div>
                <div className="absolute w-[150%] h-[150%] -top-1/4 -left-1/4 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-orbit"></div>
                <div className="absolute w-64 h-64 bg-blue-600/30 rounded-full filter blur-3xl animate-pulse1 -top-16 -left-16"></div>
                <div className="absolute w-72 h-72 bg-purple-600/30 rounded-full filter blur-3xl animate-pulse2 top-1/2 right-8"></div>
                <div className="absolute w-56 h-56 bg-pink-600/30 rounded-full filter blur-3xl animate-pulse3 bottom-0 left-1/4"></div>
            </div>

            {/* Image Container */}
            <div className="card-hori-image-container relative w-2/5 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50 z-0"></div>
                <img 
                    className="card-image w-full h-full object-contain p-4 transition-all duration-700 group-hover:scale-110 group-hover:rotate-3 group-hover:drop-shadow-[0_0_20px_rgba(0,102,255,0.8)] relative z-10" 
                    src={product.images[0]} 
                    alt={product.title}
                    onError={() => console.log(`Image failed to load: ${product.images[0]}`)}
                />
                <div className="absolute inset-0 border-4 border-transparent rounded-3xl group-hover:border-blue-500/50 group-hover:shadow-[0_0_30px_rgba(0,102,255,0.5)] transition-all duration-500"></div>
                <button className="absolute top-3 right-3 p-2 rounded-full bg-black/80 backdrop-blur-md shadow-lg transform transition-all duration-500 hover:scale-125 group/wishlist z-20">
                    <svg
                        className="w-5 h-5 fill-gray-300 transition-all duration-300 group-hover/wishlist:fill-red-500 group-hover/wishlist:drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </button>
            </div>

            {/* Content Container */}
            <div className="cardName-details flex-1 p-5 flex flex-col gap-4 relative z-10">
                <div className="card-title text-xl font-extrabold text-white tracking-wide overflow-hidden">
                    <span className="block transform transition-all duration-700 translate-y-6 group-hover:translate-y-0 group-hover:text-blue-300 group-hover:drop-shadow-[0_0_15px_rgba(0,102,255,0.8)]">
                        {product.title}
                    </span>
                </div>

                <div className="card-description flex items-center gap-3">
                    <p className="card-price text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-all duration-500 group-hover:drop-shadow-[0_0_12px_rgba(0,102,255,0.7)]">
                        Rs. {product.price}
                    </p>
                    <span className="price-strike-through text-sm text-gray-400 line-through bg-gray-700/20 px-2 py-1 rounded-lg">
                        Rs. 2499
                    </span>
                </div>

                <div className="quantity-container flex items-center gap-3">
                    <p className="q-title text-gray-200 font-semibold tracking-wide">Quantity:</p>
                    <div className="count-container flex items-center gap-1 bg-black/50 rounded-full p-1.5 shadow-[0_0_15px_rgba(0,102,255,0.3)]">
                        <button className="count w-8 h-8 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,102,255,0.6)]">-</button>
                        <span className="count-value w-10 h-8 flex items-center justify-center text-white text-base font-bold bg-black/70 rounded-full">1</span>
                        <button className="count w-8 h-8 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,102,255,0.6)]">+</button>
                    </div>
                </div>

                <div className="cta-btn flex gap-4 mt-3">
                    <button className="button hori-btn relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-2 px-5 rounded-full flex items-center justify-center gap-2 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,102,255,0.8)] group/btn">
                        <RemoveFromCartIcon />
                        <span className="relative z-10 text-base font-semibold tracking-wide">Remove From Cart</span>
                        <div className="absolute inset-0 bg-blue-700 transform scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-500"></div>
                        <div className="absolute inset-0 bg-white/30 transform scale-0 group-hover/btn:scale-150 rounded-full transition-transform duration-700"></div>
                    </button>

                    <button className="button hori-btn relative bg-gradient-to-r from-black/80 to-gray-800 border-2 border-blue-500 text-blue-300 py-1.5 px-5 rounded-full flex items-center justify-center gap-2 transition-all duration-500 hover:bg-blue-500/10 hover:text-blue-200 hover:shadow-[0_0_20px_rgba(0,102,255,0.5)] group/btn">
                        <svg
                            className="w-5 h-5 fill-blue-400 transition-all duration-300 group-hover/btn:fill-red-500 group-hover/btn:drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        <span className="relative z-10 text-base font-semibold tracking-wide">Move to Wishlist</span>
                        <div className="absolute inset-0 bg-blue-500/20 transform scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-500"></div>
                    </button>
                </div>
            </div>
        </div>
    );
};
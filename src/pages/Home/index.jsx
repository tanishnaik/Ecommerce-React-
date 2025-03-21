import { Navbar } from "../../Components/Navbar";
import { getAllProducts } from "../../api/getProducts";
import { useEffect } from "react";
import { useState } from "react";
import { ProductCard } from "../../Components/ProductCard";
import { useCart } from "../../context/cartContext";
export const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getAllProducts();
      setProducts(data);
    })();
  }, []);
  const { cart } = useCart();
  console.log({ cart });
  return (
    <>
      <Navbar />
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {products?.length > 0 &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </main>
    </>
  );
};

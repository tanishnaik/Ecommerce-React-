import { Navbar } from "../../Components/Navbar";
import { getAllProducts } from "../../api/getProducts";
import { useEffect, useState } from "react";
import { ProductCard } from "../../Components/ProductCard";
import { useCart } from "../../context/cartContext";
import { getAllCategories } from "../../api/getCategories";
import { getProductByCategory } from "../../utils/getProductByCategory";
export const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(null);

        const productsData = await getAllProducts();
        setProducts(productsData);

        const categoriesData = await getAllCategories();
        console.log("Categories Data:", categoriesData); // Debug log
        //To add an object key to an array
        const updatedCategories = [
          ...categoriesData,
          { id: "all", name: "all" },
        ];

        setCategories(updatedCategories);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const { cart } = useCart();
  const onCategoryClick = (category) => {
    console.log({ category });
    setSelectedCategory(category);
  };
  const filterByCategories = getProductByCategory(products, selectedCategory);

  return (
    <>
      <Navbar />
      <main className="p-4">
        {isLoading ? (
          <div className="text-center">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <>
            {/* Categories Section */}
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-2">Categories</h2>
              <div className="flex flex-wrap gap-4">
                {categories?.length > 0 ? (
                  categories.map((category) => (
                    <div
                      key={category.id}
                      className="bg-gray-100 p-2 rounded-md hover:cursor-pointer"
                      onClick={() => onCategoryClick(category.name)}
                    >
                      {category.name}
                    </div>
                  ))
                ) : (
                  <div>No categories available</div>
                )}
              </div>
            </section>

            {/* Products Section */}
            <section>
              <h2 className="text-xl font-bold mb-2">Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filterByCategories?.length > 0 ? (
                  filterByCategories.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))
                ) : (
                  <div>No products available</div>
                )}
              </div>
            </section>
          </>
        )}
      </main>
    </>
  );
};

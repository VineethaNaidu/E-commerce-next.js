import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProductViewer from "../components/ProductViewer";
import Sidebar from "../components/Sidebar";
import AnimatedImageContainer from "../components/AnimatedImageContainer";
import CategoryBrowser from "../components/Category";
import Image from "next/image";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Redirect to the All Products page
  const handleViewAll = () => {
    router.push({
      pathname: "/all-products",
      query: { products: JSON.stringify(products) },
    });
  };

  return (
    <div className="container mx-auto ">
      <div className="flex flex-col md:flex-row gap-4">
        <Sidebar />
        <div className="flex-1">
          <AnimatedImageContainer />
        </div>
      </div>

      <div className="flex flex-col mt-10 pl-7">
        <h2 className="text-2xl font-bold pb-5">Explore More Products</h2>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <ProductViewer products={products.slice(0, 6)} />
        )}

        <div className="text-center mt-4">
          <button
            onClick={handleViewAll}
            className="bg-red-500 text-white py-2 px-4 rounded"
          >
            View All Products
          </button>
        </div>
      </div>

      <CategoryBrowser />
      <footer className="flex justify-center items-center mt-8-auto pt-4 mt-auto cursor-pointer">
        <Image
          src="/Footer.svg"
          alt="Footer"
          width={1000}
          height={100}
          className="w-full"
        />
      </footer>
    </div>
  );
};

export default Home;

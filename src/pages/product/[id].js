// ProductDetail.js

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useCart } from "../../context/CartContext";
import Image from "next/image";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // Default to 1
  const { addToCart } = useCart();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetchProductDetails();
    }
  }, [id]);

  const fetchProductDetails = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  const handleAddedToCart = () => {
    alert("Product has been added to Cart");
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail-container flex flex-col min-h-screen">
      {/* Top Section with two side-by-side divs */}
      <div className="top-section flex flex-col md:flex-row w-full p-5 pb-6">
        {/* Product Image */}
        <div className="product-image md:w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="object-contain pl-10 w-50 h-80"
          />
        </div>

        {/* Product Details */}
        <div className="product-details md:w-1/2 p-5 flex flex-col pt-9">
          <h1 className="text-3xl font-semibold">{product.title}</h1>
          <p className="text-xl font-bold text-red-600">${product.price}</p>
          <br />
          <p className="text-gray-700 mt-3">{product.description}</p>
          <br />
          <input
            type="number"
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="border rounded w-14 p-2 mt-4"
          />
          <br />
          <button
            onClick={() => {
              handleAddToCart();
              handleAddedToCart();
            }}
            className="bg-red-500 text-white py-2  ml-1 justify-start text-sm w-1/4 rounded hover:shadow-xl"
          >
            Add to Cart
          </button>
          <br />
        </div>
      </div>

      {/* Footer Component */}
      <footer className="flex justify-center items-center mt-8-auto w-full py-4 pt-9 ">
        <Image
          src="/Footer.svg"
          alt="Footer"
          width={1000}
          height={200}
          className="w-full"
        />
      </footer>
    </div>
  );
};

export default ProductDetail;

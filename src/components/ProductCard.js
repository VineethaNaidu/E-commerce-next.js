import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // Using addToCart from context
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="product-card p-4 border rounded-lg flex flex-col h-[450px]">
      {/* Set a fixed height for the product card */}
      <Link href={`/product/${product.id}`} className="block h-full">
        <div className="product-image mb-4 flex-grow">
          <img
            src={product.image}
            alt={product.title}
            className="object-contain w-full h-48" // Fixed height for image
          />
        </div>
        <div className="product-info flex-grow">
          <h3 className="text-lg font-semibold truncate">{product.title}</h3>
          <br></br>
          <p className="text-sm text-gray-600">${product.price}</p>
          <br></br>
          <p className="text-center">Click Here</p>
        </div>
      </Link>

      {/* Add to Cart Button */}
      <div className="flex justify-between items-center py-4 mt-auto">
        <button
          onClick={handleAddToCart}
          className="add-to-cart bg-red-500 text-white py-2 px-5 text-sm font-semibold"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

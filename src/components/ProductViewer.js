import React, { useState } from "react";
import ProductCard from "./ProductCard";

const ProductViewer = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 5, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 5, products.length - 5)
    );
  };

  const displayProducts = products.slice(currentIndex, currentIndex + 5); // Slice 5 products for the current view

  return (
    <div className="product-viewer flex flex-col items-center">
      <div className="flex justify-between items-center mb-4">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="bg-gray-500 text-white py-2 px-4 rounded"
          disabled={currentIndex === 0}
        >
          &lt; Previous
        </button>

        {/* Product Cards */}
        <div className="flex justify-center items-center space-x-4">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="bg-gray-500 text-white py-2 px-4 rounded"
          disabled={currentIndex >= products.length - 5}
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
};

export default ProductViewer;

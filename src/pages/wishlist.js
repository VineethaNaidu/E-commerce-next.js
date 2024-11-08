import React from "react";
import Image from "next/image";

// Sample data for product cards
const products = [
  {
    id: 1,
    image: "/Property1.svg",
  },
  {
    id: 2,
    image: "/Property2.svg",
  },
  {
    id: 3,
    image: "/Property3.svg",
  },
  {
    id: 4,
    image: "/Property4.svg",
  },
];

const WishList = () => {
  return (
    <div className="login-container flex flex-col min-h-screen mt-3">
      {/* Wishlist Heading and Button Section */}
      <div className="wishlist-header flex justify-between items-center px-4 mt-4">
        <h3 className="text-xl font-semibold">Wishlist (4)</h3>
        <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-500">
          Move All to Bag
        </button>
      </div>

      {/* Product Cards Section */}
      <div className="flex justify-center items-center mt-5 px-4 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card bg-white p-4 rounded-lg shadow-lg text-center pb-10"
            >
              {/* Product Image */}
              <Image
                src={product.image}
                alt={`Product ${product.id}`}
                width={200}
                height={200}
                className="object-contain mx-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer Component */}
      <footer className="flex justify-center items-center w-full pt-8 mt-auto cursor-pointer">
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

export default WishList;

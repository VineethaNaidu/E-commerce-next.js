import React from "react";
import Image from "next/image";

const categories = [
  { name: "Phones", imageUrl: "Category-CellPhone.svg" },
  { name: "Gaming", imageUrl: "Category-Gamepad.svg" },
  { name: "HeadPhones", imageUrl: "Category-Headphone.svg" },
  { name: "SmartWatch", imageUrl: "Category-SmartWatch.svg" },
  { name: "Computers", imageUrl: "Category-Computer.svg" },
];

const Category = () => {
  return (
    <div className="mt-10 pl-7">
      <h2 className="text-2xl font-bold pt-3pb-5">Browse by Category</h2>
      <div className="flex space-x-10 mt-4 overflow-x-auto justify-center pr-1 pt-5 pb-10">
        {categories.map((category, index) => (
          <div
            key={index}
            className="category-item flex-shrink-0 p-10 rounded-md w-48 text-center"
          >
            {/* Image at the top */}
            <Image
              src={category.imageUrl}
              alt={category.name}
              width={64} // Set width
              height={64} // Set height
              className="mx-auto mb-3 object-contain" // Center the image and add margin-bottom
            />
            {/* Name below the image */}
            <h3 className="font-semibold">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;

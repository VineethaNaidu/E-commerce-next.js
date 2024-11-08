import React, { useState } from "react";
import Image from "next/image";

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Data for cards
  const people = [
    {
      id: 1,
      name: "Tom Cruise",
      designation: "Founder& Chairman",
      image: "/person1.png",
    },
    {
      id: 2,
      name: "Emma Watson",
      designation: "Managing Director",
      image: "/person2.png",
    },
    {
      id: 3,
      name: "Will Smaith",
      designation: "Product Designer",
      image: "/person3.png",
    },
    {
      id: 4,
      name: "Alice Brown",
      designation: "Marketing Head",
      image: "/person4.jpg",
    },
    {
      id: 5,
      name: "Chris Green",
      designation: "Designer",
      image: "/person5.jpg",
    },
    {
      id: 6,
      name: "Eve White",
      designation: "Product Manager",
      image: "/person6.jpg",
    },
  ];

  const smallImages = [
    "/Icon-Twitter.svg",
    "/icon-instagram.svg",
    "/Icon-Linkedin.svg",
  ];
  const handleNext = () => {
    if (currentIndex + 3 < people.length) {
      setCurrentIndex(currentIndex + 3);
    }
  };
  return (
    <div className="login-container flex flex-col min-h-screen">
      {/* Main Content Section */}
      <div className="flex flex-1 pt-7">
        {/* Text Section */}
        <div className="form-section w-1/2 flex flex-col justify-center pt-0">
          <h1 className="py-3 text-4xl">
            <b>Our Story</b>
          </h1>
          <p className="mt-4">
            Launched in 2015, Exclusive is South Asia's premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>
          <br />
          <p>
            Exclusive has more than 1 million products to offer and is growing
            at a very fast pace. Exclusive offers a diverse assortment in
            categories ranging from consumer goods to unique products.
          </p>
        </div>

        {/* Image Section*/}
        <div className="image-section w-1/2 flex items-center justify-end pl-8">
          {" "}
          <img
            src="/imgshop.png"
            alt="Description"
            className="w-3/4 h-3/4 object-content"
          />
        </div>
      </div>

      <div className="flex justify-center space-x-4 mt-8 mb-12 px-4">
        {/* Box 1 */}
        <div className="flex flex-col items-center w-1/5 p-6 bg-gray-100 rounded-md transition duration-300 hover:bg-slate-500 text-center cursor-pointer">
          <img
            src="/Icon-Moneybag.svg"
            alt="Sellers Icon"
            className="w-12 h-12 mb-2"
          />{" "}
          {/* Placeholder icon */}
          <p className="text-2xl font-bold">10k</p>
          <p className="text-sm">Sellers active on our site</p>
        </div>

        {/* Box 2 */}
        <div className="flex flex-col items-center w-1/5 p-6 bg-gray-100 rounded-md transition duration-300 hover:bg-slate-500 text-center cursor-pointer">
          <img
            src="/Icon-Sale.svg"
            alt="Products Icon"
            className="w-12 h-12 mb-2"
          />{" "}
          {/* Placeholder icon */}
          <p className="text-2xl font-bold">33k</p>
          <p className="text-sm">Monthly product sales</p>
        </div>

        {/* Box 3 */}
        <div className="flex flex-col items-center w-1/5 p-6 bg-gray-100 rounded-md transition duration-300 hover:bg-slate-500 text-center cursor-pointer">
          <img
            src="/Icon-Shoppingbag.svg"
            alt="CustomersIcon.svg"
            className="w-12 h-12 mb-2"
          />{" "}
          {/* Placeholder icon */}
          <p className="text-2xl font-bold">45.5k</p>
          <p className="text-sm">Active customers</p>
        </div>

        {/* Box 4 */}
        <div className="flex flex-col items-center w-1/5 p-6 bg-gray-100 rounded-md transition duration-300 hover:bg-slate-500 text-center cursor-pointer">
          <img
            src="/Icon-Moneybag.svg"
            alt="Support Icon"
            className="w-12 h-12 mb-2"
          />{" "}
          {/* Placeholder icon */}
          <p className="text-2xl font-bold">25</p>
          <p className="text-sm">Annual groass sale in our site</p>
        </div>
      </div>

      {/* People Cards Section */}
      <div className="flex justify-center mt-2 pl-6 pr-6 gap-10">
        {people.slice(currentIndex, currentIndex + 3).map((person) => (
          <div
            key={person.id}
            className="w-1/4 pt-4 pl-9 bg-slate-500 rounded-md h-96"
          >
            <img
              src={person.image}
              alt={person.name}
              className="h-64 object-content rounded-md pl-10 pr-6"
            />
            <h3 className="text-xl font-semibold mt-4 text-white">
              {person.name}
            </h3>
            <p className="text-sm text-white">{person.designation}</p>
            <div className="flex mt-2 space-x-2">
              {smallImages.map((smallImage, index) => (
                <img
                  key={index}
                  src={smallImage}
                  alt={`Small Image ${index}`}
                  className="w-4 h-4 object-content cursor-pointer"
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Arrow Icon for Next */}
      <div className="flex justify-center mt-2">
        <button
          onClick={handleNext}
          className="flex items-center text-red-500 hover:text-red-700"
        >
          {/* <FaArrowRight className="mr-2" />
    Show More */}
        </button>
      </div>

      {/* Centered Image Section */}
      <div className="flex justify-center items-center min-h mt-2 px-4 pt-10">
        {" "}
        {/* Reduced margin-top to mt-0 */}
        <img
          src="/Fullservices.svg"
          alt="Centered Image"
          className="object-content "
        />
      </div>

      {/* Footer Component */}
      <footer className="flex justify-center items-center w-full pt-8 mt-8 cursor-pointer">
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

export default About;

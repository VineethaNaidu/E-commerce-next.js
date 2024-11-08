import React, { useState, useEffect } from "react";

const images = ["/img_2_iphone.png", "/img_3.png", "/img_4.png"];

const AnimatedImageContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically advance slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3500);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="animated-image-container relative overflow-hidden mt-0 ml-0">
      <div
        className="animated-image-slider flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="animated-image flex-shrink-0 w-full">
            <img
              src={image}
              alt={`Animated Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-black p-2 rounded bg-white hover:bg-red-400 hover:text-white"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-black p-2 rounded bg-white hover:bg-red-400 hover:text-white
"
      >
        &gt;
      </button>
    </div>
  );
};

export default AnimatedImageContainer;

import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content - Left and Right Divs */}
      <div className="flex flex-grow py-10 bg-white">
        {/* Left Div */}
        <div className="flex flex-col w-1/3 space-y-4 border-r border-gray-300 pr-4 ">
          {/* Top Section */}
          <div className="flex items-center pl-12 mt-8">
            <img
              src="/Cellphone.svg"
              alt="Call Us"
              className="w-12 h-12 object-cover"
            />
            <div className="ml-4">
              <span className="font-semibold text-lg">Call Us</span>
              <div className="mt-1">
                <p className="text-sm">We are available 24/7</p>
                <p className="text-sm">7 days a week</p>
              </div>
            </div>
          </div>
          {/* Bottom Section */}
          <div className="flex items-center pl-12 mt-4">
            <img
              src="/Mail.svg"
              alt="Write to Us"
              className="w-12 h-12 object-cover"
            />
            <div className="ml-4">
              <span className="font-semibold text-lg">Write to Us</span>
              <div className="mt-1">
                <p className="text-sm">We are happy to assist you</p>
                <p className="text-sm">Please feel free to reach out anytime</p>
                <p className="text-sm">Your concerns are important to us</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Div */}
        <div className="flex flex-col w-2/3 space-y-4 pl-4 pr-12 pt-7">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-1/3 border p-2 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-1/3 border p-2 rounded"
            />
            <input
              type="tel"
              placeholder="Your Phone"
              className="w-1/3 border p-2 rounded"
            />
          </div>

          <textarea
            placeholder="Your Message"
            className="border p-2 rounded h-32"
          />

          <button className="bg-red-500 text-white py-2 px-4 rounded mt-4">
            Send Message
          </button>
        </div>
      </div>

      {/* Footer Component */}
      <footer className="w-full pt-8 mt-auto">
        <div className="flex justify-center items-center cursor-pointer">
          <Image
            src="/Footer.svg"
            alt="Footer"
            width={900}
            height={100}
            className="w-full"
          />
        </div>
      </footer>
    </div>
  );
};

export default Contact;

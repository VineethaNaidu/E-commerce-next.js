import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import Image from "next/image";

const Checkout = () => {
  const { cartItems } = useCart();
  const [isSaved, setIsSaved] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("bank");

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
  };

  return (
    <div className="container mx-auto p-4 flex flex-col min-h-screen">
      {/* Main Content Section */}
      <div className="flex flex-1 space-x-10">
        {/* Left Side - Form Section */}
        <div className="w-full lg:w-2/3 p-4 border rounded-md">
          <h2 className="text-xl font-bold mb-4">Billing Details</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Company Name (Optional)"
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Street Address"
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Apartment, Floor, etc. (Optional)"
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Town/City"
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border p-2 rounded"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border p-2 rounded"
            />
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                checked={isSaved}
                onChange={() => setIsSaved(!isSaved)}
                className="mr-2"
              />
              <label>Save this information for faster checkout next time</label>
            </div>
          </form>
        </div>

        {/* Right Side - Order Summary */}
        <div className="w-full lg:w-1/3 p-4 border rounded-md">
          <h2 className="text-xl font-bold mb-4">Your Order</h2>
          <div className="space-y-2">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between border-b py-2 text-sm items-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-12 h-12 object-cover mr-2"
                />
                <span>{item.title}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="flex justify-between py-2 text-sm">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2 text-sm">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2 font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            {/* Payment Method Selection with Radio Buttons */}
            <div className="mt-4">
              <label className="block font-bold">Payment Method</label>
              <div className="flex flex-col mt-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="bank"
                    checked={paymentMethod === "bank"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-2"
                  />
                  Bank Transfer
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-2"
                  />
                  Cash on Delivery
                </label>
              </div>
            </div>

            {/* Coupon Code and Apply Button */}
            <div className="flex items-center mt-4 space-x-2">
              <input
                type="text"
                placeholder="Coupon Code"
                className="border p-2 rounded w-2/3"
              />
              <button className="bg-red-600 text-white py-2 px-4 rounded">
                Apply Coupon
              </button>
            </div>

            {/* Place Order Button */}
            <div className="mt-6 text-left">
              <button
                onClick={handlePlaceOrder}
                className="bg-red-600 text-white py-2 px-6 rounded font-bold"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Component */}
      <footer className="flex justify-center items-center mt-8 w-full pt-4 cursor-pointer">
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

export default Checkout;

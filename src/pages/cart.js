import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import Link from "next/link";
import Image from "next/image";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const [showTotals, setShowTotals] = useState(true);

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const handleQuantityChange = (productId, quantity) => {
    // Update the quantity of the product in the cart
    updateQuantity(productId, quantity);
  };

  const updateCart = () => {
    setShowTotals(true);
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 50 ? 0 : 5.99; // Free shipping if subtotal is greater than $50
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto p-0">
      <br />
      <ul className="flex space-x-7 p-3">
        <li>
          <Link href="/" className="headerList">
            Home
          </Link>
        </li>
        <li>
          <Link href="/cart" className="headerList">
            Cart
          </Link>
        </li>
      </ul>
      <br />
      {cartItems.length === 0 ? (
        <p className="pl-9">Your cart is empty.</p>
      ) : (
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-left"></th>
              <th className="p-2 text-left">Product</th>
              <th className="p-2 text-left">Price</th>
              <th className="p-2 text-left">Quantity</th>
              <th className="p-2 text-left">Subtotal</th>
              <th className="p-2 text-left">Don't want?</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="p-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover"
                  />
                </td>
                <td className="p-2">{item.title}</td>
                <td className="p-2">${item.price.toFixed(2)}</td>
                <td className="p-2">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                    className="border rounded w-16 text-center"
                  />
                </td>
                <td className="p-2">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
                <td className="p-2">
                  <button
                    className="text-red-500"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {/* Buttons Section */}
      <div className="flex justify-between mt-4 pl-9 pr-9">
        <Link
          href="/"
          className="border text-black border-1px py-2 px-4 rounded hover:bg-red-600 hover:text-white"
        >
          Return to Shop
        </Link>
        <button
          onClick={updateCart}
          className="border text-black py-2 px-4 rounded  hover:bg-red-600 hover:text-white"
        >
          Update Cart
        </button>
      </div>
      {/* Coupon and Totals Section on the Same Line */}
      <div className="flex justify-between items-center mt-4 pt-7 pr-9">
        <div className="flex items-center space-x-2 pl-9">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border border-gray-300 p-2 rounded"
          />
          <button
            type="submit"
            className="bg-red-600 text-white py-2 px-4 rounded"
          >
            Apply Coupon
          </button>
        </div>

        {/* Show Totals Section Only After Update Cart Button is Clicked */}
        {showTotals && (
          <div className="mt-1 border pl-20 pr-10 pb-3">
            <h2 className="text-lg font-bold">Cart Total</h2>
            <table className="min-w-full mt-2">
              <tbody>
                <tr>
                  <td className="p-0">Subtotal:</td>
                  <td className="p-2 text-right">${subtotal.toFixed(2)}</td>
                </tr>
                <tr>
                  <td className="p-0">Shipping:</td>
                  <td className="p-2 text-right">${shipping.toFixed(2)}</td>
                </tr>
                <tr className="font-bold">
                  <td className="p-0">Total:</td>
                  <td className="p-2 text-right">${total.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-end mt-4">
              <Link
                href="/checkout"
                className="bg-red-500 text-white py-2 px-4 rounded border"
              >
                Proceed to Payment
              </Link>
            </div>
          </div>
        )}
      </div>
      <footer className="flex justify-center items-center mt-8 w-full bg-white-100 pt-4 mb-0">
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

export default Cart;

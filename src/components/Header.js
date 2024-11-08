import { useState } from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";

function Header({ isLoggedIn }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0); // Set initial cart quantity

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header>
        {/* Top Banner */}
        <div className="text-xl font-bold text-center p-3 bg-black text-white">
          <p>
            Summer Sale for All Suits And Free Express Delivery - OFF 50%! Shop
            Now
          </p>
        </div>

        {/* Header Section */}
        <div className="container mx-auto flex items-center justify-between p-3 bg-gray-200 text-black m-0">
          <h1 className="text-xl font-bold">
            <span
              onClick={toggleSidebar}
              className="cursor-pointer hover:underline"
            >
              EXCLUSIVE
            </span>
          </h1>

          <nav className="mx-auto">
            <ul className="flex space-x-7">
              <li>
                <Link href="/" className="headerList">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" className="headerList">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/about" className="headerList">
                  About
                </Link>
              </li>
              <li>
                <Link href="/signup" className="headerList">
                  Sign Up
                </Link>
              </li>
            </ul>
          </nav>

          {/* Search Bar */}
          <form className="relative mr-4" role="search">
            <input
              className="pl-4 pr-10 py-2 border rounded-md"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
              type="submit"
            >
              <img src="/search-icon.svg" alt="Search" className="h-6 w-6" />
            </button>
          </form>

          {/* Wishlist, Cart Icons, and Profile Icon */}
          <div className="flex items-center space-x-4">
            <Link href="/wishlist" className="relative hover:text-gray-300">
              {/* Heart Icon */}
              {cartQuantity === 0 ? (
                <img src="/Wishlist.svg" alt="Wishlist" className="h-6 w-6" />
              ) : (
                <>
                  {/* Cart Icon with quantity */}
                  <img src="/cart-icon.svg" alt="Cart" className="h-6 w-6" />
                  <span className="absolute top-0 right-0 text-xs font-bold text-red-500">
                    {cartQuantity}
                  </span>
                </>
              )}
            </Link>

            <Link href="/cart" className="relative hover:text-gray-300">
              <img src="/cart-icon.svg" alt="Cart" className="h-6 w-6" />
            </Link>

            {/* Profile Icon - Only when Logged In */}
            {isLoggedIn && (
              <Link href="/profile" className="relative hover:text-gray-300">
                <img
                  src="/user.svg"
                  alt="Profile"
                  className="h-8 w-8 rounded-full cursor-pointer"
                />
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
}

export default Header;

import Link from "next/link";

const Sidebar = ({ isOpen, toggleSidebar, position = "left" }) => {
  const handleClick = (item) => {
    console.log(`${item} clicked`);
  };

  return (
    <>
      {/* Overlay to cover content when the sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar} // Closes the sidebar when clicked on overlay
        ></div>
      )}

      {/* Sidebar itself */}
      <div
        className={`fixed h-full text-black transition-transform transform ${
          isOpen
            ? "translate-x-0"
            : position === "left"
            ? "-translate-x-full"
            : "translate-x-full"
        } ${position === "right" ? "right-0" : "left-0"} z-50 bg-white`}
      >
        <button className="p-4" onClick={toggleSidebar}>
          Close
        </button>
        <nav className="mt-10">
          <ul>
            <li className="p-4 cursor-pointer">
              <Link href="/all-products">Women's Fashion</Link>
            </li>
            <li className="p-4 cursor-pointer">
              <Link href="/all-products">Men's Fashion</Link>
            </li>
            <li className="p-4 cursor-pointer">
              <Link href="/all-products">Electronics</Link>
            </li>
            <li className="p-4 cursor-pointer">
              <Link href="/all-products">Home & Lifestyle</Link>
            </li>
            <li className="p-4 cursor-pointer">
              <Link href="/all-products">Sports and Outdoor</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;

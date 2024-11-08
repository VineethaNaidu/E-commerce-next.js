// src/pages/_app.js
import "../styles/globals.css";
import Header from "../components/Header";
import { CartProvider } from "../context/CartContext";

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      {" "}
      {/* Wrap the application with CartProvider */}
      <Header />
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;

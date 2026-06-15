import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import type { RootState } from "./store/store";

// components
import Navbar from "./components/navbar/Navbar.tsx";
import Footer from "./components/footer/Footer.tsx";
import FloatButtons from "./components/floatButtons/FloatButtons.tsx";

// pages
import Home from "./pages/home/Home.tsx";
import Catalog from "./pages/catalog/Catalog.tsx";
import Product from "./pages/product/Product.tsx";
import Cart from "./pages/cart/Cart.tsx";
import Checkout from "./pages/checkout/Checkout.tsx";
import Session from "./pages/session/Session.tsx";
import Profile from "./pages/profile/Profile.tsx";
import Dashboard from "./pages/dashboard/Dashboard.tsx";

function App() {
  const cart = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog/:category" element={<Catalog />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/session" element={<Session />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <FloatButtons />
      <Footer />
    </div>
  );
}

export default App;

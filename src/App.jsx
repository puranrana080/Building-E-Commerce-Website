import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Product from "./components/Product.jsx";
import ContactUs from "./components/ContactUs.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import Login from "./components/Login.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

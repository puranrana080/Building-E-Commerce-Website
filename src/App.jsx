import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Product from "./components/Product.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="/about"  element={<About/>} />
        <Route path="/products" element={<Product/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

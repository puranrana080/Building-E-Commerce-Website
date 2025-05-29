import React from "react";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

const App = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <Product />
    </>
  );
};

export default App;

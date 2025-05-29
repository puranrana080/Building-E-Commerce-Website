import React, { useContext, useState } from "react";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import AppContext from "./context/AppContext";

const App = () => {

  const { isCartClicked } = useContext(AppContext);
  return (
    <>
      <Navbar />
      {isCartClicked && <Cart />}

      <Product />
    </>
  );
};

export default App;

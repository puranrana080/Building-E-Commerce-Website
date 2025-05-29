import React, { useContext, useState } from "react";
import Product from "./Product";
import Navbar from "./Navbar";
import Cart from "./Cart";
import AppContext from "../context/AppContext";

const Home = () => {

  const { isCartClicked } = useContext(AppContext);
  return (
    <>
      <Navbar />
      {isCartClicked && <Cart />}

      <Product />
    </>
  );
};

export default Home;

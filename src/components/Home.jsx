import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import Cart from "./Cart";
import AppContext from "../context/AppContext";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5" style={{ maxWidth: "70%" }}>
        {" "}
        <div className="text-center">
          {" "}
          <h1 className="display-4 fst-italic">
            Welcome to the E-commerce home Page
          </h1>{" "}
          <p className="lead my-3 text-center">
            Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what’s most interesting in this post’s
            contents.
          </p>{" "}
        </div>{" "}
      </div>
    </>
  );
};

export default Home;

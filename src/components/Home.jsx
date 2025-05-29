import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import Cart from "./Cart";
import AppContext from "../context/AppContext";

const Home = () => {
  const { isCartClicked } = useContext(AppContext);
  return (
    <>
      <Navbar />
       {isCartClicked && (<Cart/>)}
      <div className="p-4 p-md-5 mb-4 rounded text-center text-body-emphasis bg-body-secondary">
        {" "}
        <div className="col-lg-6 px-0">
          {" "}
          <h1 className="display-4 fst-italic">
            Welcome to the E-commerce home Page
          </h1>{" "}
          <p className="lead my-3">
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

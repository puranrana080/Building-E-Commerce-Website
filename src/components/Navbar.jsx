import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cartData, isCartClicked, setIsCartClicked } = useContext(AppContext);
  return (
    <>
      <div
        className="container bg-warning p-2"
        style={{ display: "grid", gridTemplateColumns: "3fr 0.5fr" }}
      >
        <div
          className="conatiner "
          style={{ display: "flex", justifyContent: "center",gap:'20px' }}
        >
          <div className="">
            <NavLink to={'/'}>Home</NavLink>
          </div>
          <NavLink to={'/products'}>Product</NavLink>
          <NavLink to={'/about'}>  About  </NavLink>
        </div>

        <div
          className="conatiner"
          style={{ display: "flex", justifyContent: "end" }}
        >
          <div>
            <button
              type="button"
              className="btn btn-primary position-relative"
              onClick={() => setIsCartClicked(!isCartClicked)}
            >
              Cart
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartData.length}
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

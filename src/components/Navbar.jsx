import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isOnProductPage = location.pathname === "/products";
  const { cartData, isCartClicked, setIsCartClicked } = useContext(AppContext);
  return (
    <>
      <div
        className="container bg-warning p-3"
        style={{ display: "grid", gridTemplateColumns: "3fr 0.5fr" }}
      >
        <div
          className="conatiner m-1"
          style={{ display: "flex", justifyContent: "center", gap: "20px" }}
        >
          <NavLink to={"/"}>Home</NavLink>

          <NavLink to={"/products"}>Product</NavLink>
          <NavLink to={"/about"}> About </NavLink>
          <NavLink to={"/contact"}>Cantact Us</NavLink>
        </div>

        {isOnProductPage && (
          <div
            className="conatiner"
            style={{ display: "flex", justifyContent: "end" }}
          >
            <div>
              <button
                type="button"
                className="btn btn-primary position-relative btn-sm"
                onClick={() => setIsCartClicked(!isCartClicked)}
              >
                Cart
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartData.length}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;

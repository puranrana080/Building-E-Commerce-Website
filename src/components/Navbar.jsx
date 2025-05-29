import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";

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
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="mx-3">
            <div>Home</div>
          </div>
          <div>Product</div>
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

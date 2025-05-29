import React from "react";

const Navbar = () => {
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
            <button className="btn btn-sm-danger">Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

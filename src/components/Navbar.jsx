import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isOnProductPage = location.pathname === "/products";
  const {
    cartData,
    isCartClicked,
    setIsCartClicked,
    isLoggedIn,
    setToken,
    setIsLoggedIn,
  } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    setIsLoggedIn(false);
    navigate("/login");
  };

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
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to={"/"}
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to={"/products"}
            onClick={(e) => {
              e.preventDefault();
              if (!isLoggedIn) navigate("/login");
            }}
          >
            Product
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to={"/about"}
          >
            {" "}
            About{" "}
          </NavLink>

          {!isLoggedIn && (
            <>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to={"/login"}
              >
                {" "}
                Login{" "}
              </NavLink>
            </>
          )}
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to={"/contact"}
          >
            Cantact Us
          </NavLink>
          {isLoggedIn && (
            <button className="btn btn-outline-danger" onClick={handleLogout}>
              Logout
            </button>
          )}
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

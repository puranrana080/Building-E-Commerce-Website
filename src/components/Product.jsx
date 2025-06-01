import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import Navbar from "./Navbar";
import Cart from "./Cart";
import { Link } from "react-router-dom";

const Product = () => {
  const { productsArr, addToCart, isCartClicked } = useContext(AppContext);

  return (
    <>
      <Navbar />
      {isCartClicked && <Cart />}
      <div className="container mt-5 " style={{ width: "70%" }}>
        <div className="row">
          {productsArr.map((item) => (
            <div key={item.title} className="col-md-6 mb-4">
              <div className="heading-container text-center">
                <h1>{item.title}</h1>
              </div>
              <Link
                className="img-container product-img-wrapper"
                to={`/product/${item.title}`}
              >
                <img
                  src={item.imageUrl}
                  alt="loading"
                  className="img-fluid d-block mx-auto product-img"
                />
              </Link>
              <div className="price-conatiner text-center">
                <h3>Price: {item.price}</h3>
                <button
                  className="btn btn-warning"
                  onClick={() => addToCart(item.title)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;

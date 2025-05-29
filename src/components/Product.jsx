import React,{useContext} from "react";
import AppContext from "../context/AppContext";
import Navbar from "./Navbar";
import Cart from "./Cart";

const Product = () => {
  const {productsArr,addToCart,isCartClicked} =useContext(AppContext)
 
  return (
    <>
    <Navbar/>
    {isCartClicked && (<Cart/>)}
      <div className="container mt-5 " style={{ width: "70%" }}>
        <div className="row">
          {productsArr.map((item) => (
            <div key={item.title} className="col-md-6 mb-4">
              <div className="heading-container text-center">
                <h1>{item.title}</h1>
              </div>
              <div className="img-container">
                <img
                  src={item.imageUrl}
                  alt="loading"
                  className="img-fluid d-block mx-auto"
                />
              </div>
              <div className="price-conatiner text-center">
                <h3>Price: {item.price}</h3><button className="btn btn-warning" onClick={()=>addToCart(item.title)} >Add To Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;

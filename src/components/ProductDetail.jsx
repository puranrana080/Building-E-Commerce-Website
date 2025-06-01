import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../context/AppContext";
import Navbar from "./Navbar";

const ProductDetail = () => {
  const { productId } = useParams();
  const { productsArr } = useContext(AppContext);

  const product = productsArr.find((prod) => {
    return prod.title === productId;
  });
  console.log("rfyjr", product);

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div style={{ display: "flex", padding: "20px", gap: "30px" }}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <img
              src="/colors1.jpeg"
              alt="thumb"
              style={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
                border: "1px solid #ccc",
              }}
            />
            <img
              src="/colors2.jpg"
              alt="thumb"
              style={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
                border: "1px solid #ccc",
              }}
            />
            <img
              src="/colors3.jpeg"
              alt="thumb"
              style={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
                border: "1px solid #ccc",
              }}
            />
            <img
              src="/colors4.webp"
              alt="thumb"
              style={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div style={{ flex: 1 }}>
            <img
              src={product.imageUrl}
              alt={product.title}
              style={{
                width: "100%",
                height: "400px",
                objectFit: "contain",
                marginBottom: "20px",
              }}
            />
            <h2>{product.title}</h2>
            <p>
              <strong>Price:</strong> ${product.price}
            </p>
            <p>{product.description}</p>
          </div>
        </div>

        <div className="text-center">
          <div style={{ marginTop: "40px" }}>
            <h3>Customer Reviews</h3>
            <div style={{ borderTop: "1px solid #ccc", paddingTop: "10px" }}>
              <p>
                <strong>John D.</strong>: Great product! Totally worth the
                price.
              </p>
              <p>
                <strong>Ravi S.</strong>: Looks amazing and the quality is good.
              </p>
              <p>
                <strong>Ayesha K.</strong>: Fast delivery and product matches
                description.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;

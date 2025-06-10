import React, { useState, useEffect } from "react";
import AppContext from "./AppContext";

const AppState = (props) => {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const initialToken = localStorage.getItem("token");
  const [isCartClicked, setIsCartClicked] = useState(false);
  const [token, setToken] = useState(initialToken);
  const [isLoggedIn, setIsLoggedIn] = useState(token ? true : false);
  const [cartLength, setCartLength] = useState(0);

  const userEmail = localStorage.getItem("userEmail");
  useEffect(() => {
    const useremailid = userEmail.replace(/[@.]/g, "");
    fetch(
      `https://crudcrud.com/api/9c1c991d66864cb59e837961dcfb1bcf/cart${useremailid}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCartLength(data.length);
      })
      .catch((err) => console.error("Failed to update cart length", err));
  }, [userEmail]);

  const addToCart = (name) => {
    const userEmail = localStorage.getItem("userEmail");
    const useremailid = userEmail.replace(/[@.]/g, "");
    const API_URL = `https://crudcrud.com/api/9c1c991d66864cb59e837961dcfb1bcf/cart${useremailid}`;
    const index = productsArr.findIndex((prod) => prod.title == name);
    if (index === -1) return;

    const selectedProd = productsArr[index];
    console.log("Adding this to cart", selectedProd);
    //fetching existing item
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const existing = data.find((item) => item.title == name);
        if (existing) {
          const updatedItem = {
            title: existing.title,
            price: existing.price,
            imageUrl: existing.imageUrl,
            quantity: (existing.quantity || 1) + 1,
          };
          return fetch(`${API_URL}/${existing._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedItem),
          });
        } else {
          return fetch(API_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...selectedProd, quantity: 1 }),
          });
        }
      })
      .then(() => {
        console.log("Item added to cart");
        alert("Added To Cart");
        //cart llength
        return fetch(API_URL)
          .then((res) => res.json())
          .then((data) => {
            setCartLength(data.length);
          });
      })
      .catch((err) => {
        console.log("Error adding to cart", err);
      });
  };

  return (
    <AppContext.Provider
      value={{
        productsArr,
        isCartClicked,
        setIsCartClicked,
        addToCart,
        isLoggedIn,
        setIsLoggedIn,
        token,
        setToken,
        cartLength,
        setCartLength,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;

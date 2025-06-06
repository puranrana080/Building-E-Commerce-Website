import React, { useEffect, useState } from "react";
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
  const cartElements = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
  ];
  const initialToken = localStorage.getItem("token");
  const [isCartClicked, setIsCartClicked] = useState(false);
  const [cartData, setCartData] = useState(cartElements);
  const [token, setToken] = useState(initialToken);
  const [isLoggedIn, setIsLoggedIn] = useState(token ? true : false);

  const addToCart = (name) => {
    //check if item valid
    const index = productsArr.findIndex((prod) => prod.title == name);

    if (index === -1) return;
    const selectedProd = productsArr[index];

    const cartIndex = cartData.findIndex((prod) => prod.title == name);
    if (cartIndex !== -1) {
      alert("Item Already in cart");
      return;
    } else {
      cartData.push({ ...selectedProd, quantity: 1 });
      const updatedData = [...cartData];
      setCartData(updatedData);
      alert("Item successfully added to cart");
    }
  };

  return (
    <AppContext.Provider
      value={{
        productsArr,
        isCartClicked,
        setIsCartClicked,
        cartData,
        addToCart,
        isLoggedIn,
        setIsLoggedIn,
        token,
        setToken,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;

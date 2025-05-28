import React from "react";

const Product = () => {
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
  return (
    <>
      <div className="container">
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
                <h3>Price: {item.price}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;

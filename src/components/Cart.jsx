import React from "react";

const Cart = () => {
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
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];
  return (
    <>
      <div className="modal-wrapper"></div>
      <div
        className="modal-container text-center"
        style={{ width: "30%", height: "80%" }}
      >
        <h1 className="text-center">
          My Cart <button className="btn btn-danger btn-sm">X</button>
        </h1>

        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {cartElements.map((item) => (
              <tr key={item.name}>
                <td>
                  <img
                    src={item.imageUrl}
                    alt="not found"
                    style={{ height: "50px", width: "50px" }}
                  />
                </td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                  {" "}
                  <button className="btn btn-danger btn-sm">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cart;

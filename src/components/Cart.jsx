import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";

const Cart = () => {
  const { isCartClicked, setIsCartClicked, setCartLength } =
    useContext(AppContext);
  const [cartData, setCartData] = useState([]);
  let userEmail = localStorage.getItem("userEmail");
  const useremailid = userEmail.replace(/[@.]/g, "");
  useEffect(() => {
    fetch(
      `https://crudcrud.com/api/9c1c991d66864cb59e837961dcfb1bcf/cart${useremailid}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCartData(data);
      })
      .catch((err) => {
        console.error("Error fetching cart:", err);
      });
  }, [useremailid]);
  return (
    <>
      <div className="modal-wrapper"></div>
      <div
        className="modal-container text-center table-responsive"
        style={{ width: "30%" }}
      >
        <h1 className="text-center">
          My Cart{" "}
          <button
            className="btn btn-danger btn-sm"
            onClick={() => setIsCartClicked(!isCartClicked)}
          >
            Close
          </button>
        </h1>

        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Img</th>
              <th scope="col">Item</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((item) => (
              <tr key={item._id}>
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
                  <input
                    type="text"
                    maxLength="2"
                    placeholder={item.quantity}
                    style={{
                      width: "4ch",
                      marginRight: "10px",
                      padding: "2px 6px",
                      fontSize: "0.9rem",
                      textAlign: "center",
                    }}
                  />

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

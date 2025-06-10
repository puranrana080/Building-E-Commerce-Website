import React, { useRef, useContext } from "react";
import Navbar from "./Navbar";
import AppContext from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { isLoggedIn, setIsLoggedIn, setToken } = useContext(AppContext);
  const enteredEmailRef = useRef();
  const enteredPasswordRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDLOTD964PNfHMmKh2v3Ad2DhAeDuOI60c",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmailRef.current.value,
          password: enteredPasswordRef.current.value,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        return res.json().then((data) => {
          const tokenId = data.idToken;
          localStorage.setItem("token", tokenId);
          localStorage.setItem("userEmail", data.email);
          setToken(tokenId);
          setIsLoggedIn(true);
          console.log("token generated", data);
          alert("Successfully Logged In");
          navigate("/products");
        });
      } else {
        return res.json().then((data) => {
          let errorMsg = "Wrong credentials";
          if (data) {
            errorMsg = data?.error?.message;
          }
          alert(errorMsg);
        });
      }
    });
  };

  return (
    <>
      <Navbar />
      <div className="container my-5" style={{ maxWidth: "50%" }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              ref={enteredEmailRef}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              ref={enteredPasswordRef}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="/about"  element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

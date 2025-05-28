import React from 'react'

const Navbar = () => {
  return (
    <>
    <div class="container">
        {" "}
        <header class="d-flex justify-content-center py-3">
          {" "}
          <ul class="nav nav-pills">
            {" "}
            <li class="nav-item">
              <a href="#" class="nav-link " aria-current="page">
                Home
              </a>
            </li>{" "}
            <li class="nav-item">
              <a href="#" class="nav-link active">
                Products
              </a>
            </li>{" "}
            <li class="nav-item">
              <a href="#" class="nav-link">
                About
              </a>
            </li>{" "}
          </ul>{" "}
        </header>{" "}
      </div>
    </>
  )
}

export default Navbar
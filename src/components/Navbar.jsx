// src/components/Navbar.jsx
import React from "react";
import "../assets/styles.css";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <h1 className="logo">Presently</h1>
          <div id="nav-links">
            <a href="#">Home</a>
            <a href="#">Resources</a>
            <a href="#">Pricing</a>
            <a href="#">About us</a>
            <button onClick={() => (window.location.href = "signin.html")} className="btn login">
              Login
            </button>
            <button onClick={() => (window.location.href = "signup.html")} className="btn signup">
              Sign Up
            </button>
          </div>
          <div>
            <span className="material-symbols-outlined" id="hamburger">
              menu
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

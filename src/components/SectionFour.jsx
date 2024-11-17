import React from "react";
import "../assets/styles.css";

const SectionWhy = () => {
  return (
    <div className="container">
      <div className="why">
        <h1>Choose Presently</h1>
        <button onClick={() => (window.location.href = "signin.html")}>
          See all features
        </button>
      </div>
    </div>
  );
};

export default SectionWhy;

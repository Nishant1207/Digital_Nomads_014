import React from "react";
import "../assets/styles.css";

const SectionOne = () => {
  return (
    <div className="container">
      <div className="content-1">
        <div>
          <h1>An online</h1>
          <h1>presentation</h1>
          <h1>maker that's fast,</h1>
          <h1>flexible, and free</h1>
          <p>
            Want to manage projects effortlessly? Presently combines the best of productivity,
            organization, and collaboration tools. With Presently, you'll streamline tasks and
            visualize progress in just minutes.
          </p>
          <button onClick={() => (window.location.href = "signup.html")}>
            Create a presentation
          </button>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/pitch-software/image/upload/v1708337300/website/marketing-pages/presentation-maker/presentation-maker-hero.png"
            alt="presentation"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;


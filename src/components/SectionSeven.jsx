import React from "react";
import "../assets/styles.css";

const PricingSection = () => {
  return (
    <div className="container">
      <div className="container-2">
        <div className="left-section">
          <img
            className="bg-circle"
            src="/logos/plan-bg.svg"
            alt="Background"
          />
          <img
            className="main-img"
            src="/logos/plan-img.webp"
            alt="Main"
          />
          <div className="price-tag individual">
            <p>Individual Pricing $14/month</p>
          </div>
          <div className="price-tag asana">
            <p>3 free projects, forever</p>
          </div>
          <div className="price-tag standalone">
            <p>7-day free-trial</p>
          </div>
          <div className="price-tag team">
            <p>Team pricing $30/month</p>
          </div>
        </div>
        <div className="right-section">
          <h1>Choose the plan that suits you best</h1>
          <p>
            We offer monthly and yearly subscriptions. Sign up for free, no
            credit card required.
          </p>
          <button>See pricing</button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;

import React from "react";
import "../assets/styles.css";

const TrustedBy = () => {
  return (
    <div className="container">
      <div className="trusted-container">
        <h2>Trusted by over 100,000 customers world-wide</h2>
        <div className="logos">
         
          <div className="logo">
            <img
              src="https://res.cloudinary.com/pitch-software/image/upload/website/pricing/logos/dept_vlvpvs.svg"
              alt="eBay"
            />
          </div>
          <div className="logo">
            <img
              src="https://res.cloudinary.com/pitch-software/image/upload/website/pricing/logos/unsplash_pqnf1p.svg"
              alt="Square"
            />
          </div>
          <div className="logo">
            <img
              src="https://res.cloudinary.com/pitch-software/image/upload/website/pricing/logos/linear.svg"
              alt="Spotify"
            />
          </div>
          <div className="logo">
            <img
              src="https://res.cloudinary.com/pitch-software/image/upload/website/pricing/logos/eqt_scl5eh.svg"
              alt="Cisco"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;

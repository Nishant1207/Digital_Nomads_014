import React from "react";
import "../assets/styles.css";

const SectionThree = () => {
  return (
    <div className="container">
      <div className="sec-1">
        <div>
          <img
            src="https://res.cloudinary.com/pitch-software/image/upload/v1708337300/website/marketing-pages/presentation-maker/presentation-maker-templates.png"
            alt="presentation templates"
          />
        </div>
        <div className="line">
          <h2 className="tag">Start with a template</h2>
          <hr className="un-line" />
          <p>
            Choose from 100+ expert-made presentation templates or generate a
            draft with AI. Then add your brand colors and upload custom fonts to
            make every slide look uniquely yours.
          </p>
        </div>
      </div>

      <div className="sec-2">
        <div className="line">
          <h2 className="tag">Share and track presentations</h2>
          <hr className="un-line" />
          <p>
            Pitch makes online collaboration seamless. Work together across
            devices, in real-time or asynchronously. Delegate work and manage
            team feedback to swiftly create winning presentations.
          </p>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/pitch-software/image/upload/v1708356424/website/marketing-pages/presentation-maker/presentation-maker-share.png"
            alt="presentation sharing"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionThree;

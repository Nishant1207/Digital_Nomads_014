import React from "react";
import "../assets/styles.css";
const SectionFeatures = () => {
  return (
    <div className="container">
      <div className="container-1">
        {/* Large card with image on the right */}
        <div className="card-large">
          <div className="card-content">
            <img
              src="https://res.cloudinary.com/pitch-software/image/upload/v1711027916/product/icon-collaboration_veveez.svg"
              alt=""
            />
            <h2>Collaborative editing</h2>
            <p>
              Edit slides together with ease. Take your collaboration to the next level with assignees, statuses, and comments.
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/pitch-software/image/upload/v1711027491/product/feature-collaboration.png"
            alt="Collaborative Editing"
          />
        </div>

        {/* Small card without image */}
        <div className="card-small">
          <div className="card-content">
            <img
              src="https://res.cloudinary.com/pitch-software/image/upload/v1711027919/product/icon-animations_o0eeia.svg"
              alt=""
            />
            <h2>Animations</h2>
            <p>Wow your audience with sleek animations built in seconds.</p>
          </div>
        </div>

        {/* Small card without image */}
        <div className="card-small">
          <div className="card-content">
            <img
              src="https://res.cloudinary.com/pitch-software/image/upload/v1711027915/product/icon-media_integrations_br71so.svg"
              alt=""
            />
            <h2>Millions of free assets</h2>
            <p>Access photos, GIFs, icons, and logos right from the editor.</p>
          </div>
        </div>

        {/* Large card with image on the right */}
        <div className="card-large">
          <div className="card-content">
            <img
              src="https://res.cloudinary.com/pitch-software/image/upload/v1711027918/product/icon-embeds_ce2gdg.svg"
              alt=""
            />
            <h2>Interactive embeds</h2>
            <p>
              Create decks that engage and convert. Let viewers play videos, book meetings, submit forms, and more.
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/pitch-software/image/upload/v1711027491/product/feature-embeds.png"
            alt="Interactive Embeds"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionFeatures;

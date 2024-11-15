import React from "react";
import MenuBar from "./MenuBar";
import SlideEditor from "./SlideEditor";
import './SlidesHome.css'

function SlidesHome() {
  return (
    <div className="slides-home">
      <MenuBar />
      <SlideEditor />
    </div>
  );
}

export default SlidesHome;

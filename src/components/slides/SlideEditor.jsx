// SlideEditor.jsx
import React, { useState } from "react";
import SlideSidebar from "./SlideSidebar";
import SlideViewer from "./SlideViewer";
import "./SlideEditor.css";

function SlideEditor() {
  const [slides, setSlides] = useState([{ title: "Click to add title", subtitle: "Click to add subtitle" }]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const addSlide = () => {
    setSlides((prevSlides) => {
      const updatedSlides = [
        ...prevSlides,
        { title: "Click to add title", subtitle: "Click to add subtitle" },
      ];
      setCurrentSlideIndex(updatedSlides.length - 1); // Set the index to the newly added slide
      return updatedSlides;
    });
  };

  const deleteSlide = () => {
    if (slides.length > 1) {
      const updatedSlides = slides.filter((_, index) => index !== currentSlideIndex);
      setSlides(updatedSlides);
      
      // Update currentSlideIndex to point to the previous slide or next one
      const newIndex = currentSlideIndex === 0 ? 0 : currentSlideIndex - 1;
      setCurrentSlideIndex(newIndex); 
    } else {
      alert("Cannot delete the last slide."); // Prevent deletion of the last slide
    }
  };

  const updateSlideContent = (field, value) => {
    if (value.trim() === "") {
      return;  // Prevent updating with empty values
    }

    const updatedSlides = slides.map((slide, index) =>
      index === currentSlideIndex ? { ...slide, [field]: value } : slide
    );
    setSlides(updatedSlides);
  };

  // Ensure that `slides[currentSlideIndex]` is always valid
  const currentSlide = slides[currentSlideIndex] || { title: '', subtitle: '' };

  return (
    <div className="slide-editor">
      <SlideSidebar
        slides={slides}
        currentSlideIndex={currentSlideIndex}
        addSlide={addSlide}
        deleteSlide={deleteSlide}
        selectSlide={setCurrentSlideIndex}
      />
      <SlideViewer
        slide={currentSlide}  // Pass the current slide
        updateSlideContent={updateSlideContent}
      />
    </div>
  );
}

export default SlideEditor;

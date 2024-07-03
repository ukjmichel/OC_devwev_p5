import React, { useEffect, useRef, useState } from "react";
import "../styles/carousel.scss";
import leftArrow from "../images/left_arrow.svg";
import rightArrow from "../images/right_arrow.svg";



const Carousel = ({images}) => {
  // State to track the current index of the carousel
  const [currentIndex, setCurrentIndex] = useState(1);
  // State to track if the carousel is in the middle of a transition
  const [isTransitioning, setIsTransitioning] = useState(false);
  // Reference to the carousel images container
  const transitionRef = useRef(null);

  const totalImages = images.length;

  // Function to go to the next image
  const goToNext = () => {
    if (isTransitioning) return; // Prevents multiple transitions at the same time
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Function to go to the previous image
  const goToPrevious = () => {
    if (isTransitioning) return; // Prevents multiple transitions at the same time
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  // Effect to handle the transition end and adjust the currentIndex if needed
  useEffect(() => {
    if (!isTransitioning) return;

    const handleTransitionEnd = () => {
      setIsTransitioning(false);
      // Remove the event listener after the transition ends
      transitionRef.current.removeEventListener(
        "transitionend",
        handleTransitionEnd
      );

      // Adjust the currentIndex to ensure smooth looping
      if (currentIndex === totalImages + 1) {
        setCurrentIndex(1); // Reset to the first image (after the placeholder)
      } else if (currentIndex === 0) {
        setCurrentIndex(totalImages); // Reset to the last image (before the placeholder)
      }
    };

    // Add event listener for the transition end
    transitionRef.current.addEventListener(
      "transitionend",
      handleTransitionEnd
    );
  }, [isTransitioning, currentIndex, totalImages]);

  // Style for the transition effect
  const transitionStyle = isTransitioning
    ? { transition: "transform 0.5s ease-in-out" }
    : { transition: "none" };

  // Style to translate the carousel images based on the currentIndex
  const slideStyle = {
    transform: `translateX(-${currentIndex * 100}%)`,
  };

  return (
    <div className="carousel">
      <button className="arrow left" onClick={goToPrevious}>
        <img src={leftArrow} alt="carousel-left-btn" />
      </button>
      <div className="carousel-container">
        <div
          className="carousel-images"
          style={{ ...transitionStyle, ...slideStyle }}
          ref={transitionRef}
        >
          {/* Placeholder for smooth transition */}
          <img
            src={images[totalImages - 1]}
            alt="Slide last"
            className="carousel-image"
          />

          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index}`}
              className="carousel-image current-image"
            />
          ))}

          {/* Placeholder for smooth transition */}
          <img src={images[0]} alt="Slide first" className="carousel-image" />
        </div>
      </div>
      <button className="arrow right" onClick={goToNext}>
        <img src={rightArrow} alt="carousel-right-btn" />
      </button>
    </div>
  );
};

export default Carousel;

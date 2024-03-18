import React, { useState } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to navigate to a specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Function to navigate to the previous slide
  const goToPrevSlide = () => {
    const index = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(index);
  };

  // Function to navigate to the next slide
  const goToNextSlide = () => {
    const index = (currentIndex + 1) % images.length;
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      {/* Button to navigate to the previous slide */}
      <button onClick={goToPrevSlide} className="prev">&#10094;</button>

      {/* Mapping over images to display each slide */}
      {images.map((image, index) => (
        <div
          key={index}
          className={index === currentIndex ? "slide active" : "slide"}
        >
          <img src={image} alt={`slide ${index}`} />
        </div>
      ))}

      {/* Button to navigate to the next slide */}
      <button onClick={goToNextSlide} className="next">&#10095;</button>

      {/* Dots representing each slide */}
      <div className="dot-center">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? "dot active" : "dot"}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;

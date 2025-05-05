import React, { useState, useEffect } from 'react';

const images = [
  { id: 1, url: "/Images/Carousel/Black and Purple Modern App New Features Animated Video.png", alt: "Image 1" },
  { id: 2, url: "/Images/Carousel/Black Modern Gradient Guide Mobile Apps Video Promotion .png", alt: "Image 2" },
  { id: 3, url: "/Images/Carousel/Blue Technology App New Features Animated Video.png", alt: "Image 3" },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Auto slide every 20 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 1000);
    return () => clearInterval(interval);
  }, [currentIndex]);
  

  return (
    <div className="relative w-full max-w-[95%] md:max-w-[90%] lg:max-w-[1880px] mx-auto overflow-hidden rounded-2xl shadow-lg mt-5">
      <img
        src={images[currentIndex].url}
        alt={images[currentIndex].alt}
        className="w-full h-[300px] sm:h-[400px] md:h-[600px] lg:h-[800px] object-cover transition duration-500"
      />

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        &#8592;
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        &#8594;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

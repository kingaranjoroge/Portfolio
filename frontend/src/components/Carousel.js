import React, { useState } from 'react'

const Carousel = ({ slides, height = "400px", title, projectUrl, description }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const handleClick = () => {
    if (projectUrl) {
      window.open(projectUrl, '_blank');
    }
  };

return (
    <div className="relative w-5/6">
      {title && (
        <h3 className="text-xl font-bold text-blue-950 mb-3 hover:underline cursor-pointer"
            onClick={handleClick}>
          {title}
        </h3>
      )}
      
      <div 
        className="relative cursor-pointer group"
        style={{ height }}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-500 ease-in-out
              ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={typeof slide === 'string' ? slide : slide.url}
              alt={typeof slide === 'string' ? `Slide ${index + 1}` : slide.description}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Description Overlay - Now positioned at the bottom */}
        <div 
          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent 
            transition-all duration-300 p-6 transform
            ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <p className="text-white text-center text-sm md:text-base">
            {description}
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }} 
            className="btn btn-circle bg-black/50 text-white hover:bg-black/70"
          >
            ❮
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }} 
            className="btn btn-circle bg-black/50 text-white hover:bg-black/70"
          >
            ❯
          </button>
        </div>

        {/* Slide Indicators - Moved up slightly to avoid overlap with description */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentSlide(index);
              }}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
import React, { useState, useEffect, useRef } from 'react';

const Carousel = ({ children, interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesRef = useRef(children);
  
  useEffect(() => {
    slidesRef.current = children;
  }, [children]);

  const totalSlides = slidesRef.current ? React.Children.count(slidesRef.current) : 0;

  const goToSlide = (index) => {
    if (totalSlides === 0) return;

    let newIndex = index;
    if (newIndex < 0) {
      newIndex = totalSlides - 1; 
    } else if (newIndex >= totalSlides) {
      newIndex = 0; 
    }
    setCurrentSlide(newIndex);
  };

  useEffect(() => {
    if (totalSlides > 1 && interval > 0) {
      const timer = setInterval(() => {
        setCurrentSlide((prevIndex) => (prevIndex + 1) % totalSlides);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [totalSlides, interval]);

  if (totalSlides === 0) return null;

  const renderDots = () => {
    return React.Children.map(slidesRef.current, (_, index) => (
      <span
        key={index}
        className={`dot ${index === currentSlide ? 'active' : ''}`}
        onClick={() => goToSlide(index)}
      />
    ));
  };

  return (
    <div className="left">
      
      {totalSlides > 1 && (
        <>
          <button className="carousel-arrow left-arrow" onClick={() => goToSlide(currentSlide - 1)}>
            &#10094;
          </button>
          <button className="carousel-arrow right-arrow" onClick={() => goToSlide(currentSlide + 1)}>
            &#10095;
          </button>
        </>
      )}

      <div 
        className="carousel-slides"
        style={{
          width: `${totalSlides * 100}%`,
          transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
        }}
      >
        {React.Children.map(slidesRef.current, (child) => (
          <div 
            className="carousel-slide-content" 
            style={{ width: `${100 / totalSlides}%` }}
          >
            {child}
          </div>
        ))}
      </div>

      {totalSlides > 1 && (
        <div className="carousel-dots">
          {renderDots()}
        </div>
      )}
    </div>
  );
};

export default Carousel;
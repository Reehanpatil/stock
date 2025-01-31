import { useState } from 'react';

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='slider'>
      <div
        className='slide'
        style={{
          background: slides[currentIndex].bgColor, // Apply linear gradient
        }}
      >
        <div className='content'>
          <img
            src={slides[currentIndex].profile}
            alt='Profile'
            className='profile'
          />
          <p className='quote'>{slides[currentIndex].quote}</p>
          <p className='author'>{slides[currentIndex].author}</p>
          <p className='designation'>{slides[currentIndex].designation}</p>
        </div>
      </div>

      <button className='prev' onClick={prevSlide}>
        ❮
      </button>
      <button className='next' onClick={nextSlide}>
        ❯
      </button>

      <div className='dots'>
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${currentIndex === idx ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;

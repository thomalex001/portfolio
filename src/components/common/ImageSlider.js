import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  console.log('SLIDES', slides.length)

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div>
      <section className='slider'>
        <SlArrowLeft
          className='left-arrow'
          onClick={prevSlide}
        />
        <SlArrowRight
          className='right-arrow'
          onClick={nextSlide}
        />
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}>
              {index === current && (
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className='image'
                />
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default ImageSlider;

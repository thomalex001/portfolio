import ImageSlider from './common/ImageSlider';
import { SliderData } from './common/SliderData';
import React, { forwardRef } from 'react';



const AboutMe = forwardRef((props, ref)  => {


  return (
    <div
      className='about-me-container'
      ref={ref}>
      <h1 className=''>More About Me</h1>
      <h2>
        Here are the TOP 5 things I <span>cannot </span>live without:
      </h2>
      <ImageSlider
        classname='image-slider'
        slides={SliderData}
      />
      <h3>
        <a
          href='https://www.youtube.com/@GQVideos'
          target='_blank'
          alt='youtube-link'
          rel='noreferrer'>
          (Inspiration: GQ Youtube Videos)
        </a>
      </h3>
    </div>
  );
});

export default AboutMe;
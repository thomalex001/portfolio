import ImageSlider from './common/ImageSlider';
import { SliderData } from './common/SliderData';
import React, { forwardRef } from 'react';



const AboutMe = forwardRef((props, ref)  => {


  return (
    <div
      className='about-me-container'
      ref={ref}>
      <h1>More About Me</h1>
      <h3>
        I have been inspired by{' '}
        <a
          href='https://www.youtube.com/@GQVideos'
          target='_blank'
          alt='youtube-link'
          rel='noreferrer'>
          GQ Youtube Videos
        </a>{' '}
        for this slide of the <br></br>
        <span >
          TOP 5 things I cannot live without:
        </span>
      </h3>
      <h3>
        I started working in hospitality at a young age and my love for food and
        eating out has grown stronger ever since. The London food scene is
        undeniably one of the most diverse in the world and to me, this makes it
        one of the most exciting too. Trying out new places to eat out is right at the top of my list.
      </h3>
      <ImageSlider slides={SliderData} />
    </div>
  );
});

export default AboutMe;
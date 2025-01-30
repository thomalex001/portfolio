import React, { useEffect, useState } from 'react';
import { FaAngleUp } from 'react-icons/fa';

function ScrollToTop() {
  const [showIcon, setShowIcon] = useState(false);

  // Define scrollToTop function here
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smoothly scroll to the top
  }

  useEffect(() => {
    function isAtBottom() {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY 

      const threshold = -4000;

      return scrollY >= windowHeight - threshold;
    }

    function handleScroll() {
      setShowIcon(isAtBottom());
    }

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`top-to-btm ${showIcon ? 'show' : ''}`}
      onClick={scrollToTop}>
      {showIcon && (
        <div>
          <FaAngleUp className='icon-position icon-style' />
        </div>
      )}
    </div>
  );
}

export default ScrollToTop;

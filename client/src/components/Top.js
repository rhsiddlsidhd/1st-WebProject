import React, { useState, useEffect } from 'react';
import topButtonImage from '../image/moveTopIcon.png';

const Top = () => {
  const [showButton, setShowButton] = useState(false);

  const MoveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <div className='div__button--move-top-button' onClick={MoveToTop}>
          <img src={topButtonImage} alt='To Top' />
        </div>
      )}
    </>
  );
};

export default Top;

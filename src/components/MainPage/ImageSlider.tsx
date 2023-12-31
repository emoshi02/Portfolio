import React, { useEffect, useState } from 'react';
import ImageLeft from '../../assets/svg/img-slider-left.svg';
import ImageRight from '../../assets/svg/img-slider-right.svg';
import Arrow from '../../assets/svg/Rodykle.svg';
import { convertSVGToString } from '../../utils';

const ImageSlider = () => {
  const [showLeftImage, setShowLeftImage] = useState(true);

  const handleMouseEnter = () => {
    setShowLeftImage(false);
  };

  const handleMouseLeave = () => {
    setShowLeftImage(true);
  };

  useEffect(() => {
    let resizeTimer: string | number | NodeJS.Timeout | undefined;

    const handleResize = () => {
      document.body.classList.add('resize-animation-stopper');
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <div className="image-slider">
      <div
        className={`image-container-left ${
          !showLeftImage ? `on-right-hover` : ''
        }`}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className="slider left-image"
          src={convertSVGToString(ImageLeft)}
          alt="Left Image"
        />
      </div>
      <div className="image-container-right" onMouseLeave={handleMouseLeave}>
        <img
          className="slider right-image"
          src={convertSVGToString(ImageRight)}
          alt="Right Image"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      <h1 className="slider-text left">Front - end</h1>
      <h1 className="slider-text right">UX/UI</h1>
      <img src={convertSVGToString(Arrow)} className="projects-arrow" />
      <h2 className="projects-text">Projektai</h2>
    </div>
  );
};

export default ImageSlider;

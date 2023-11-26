import { RefObject, useEffect } from 'react';

export const animateBg = (ref: RefObject<HTMLDivElement>) => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        const moveX = (e.pageX * -1) / 15;
        const moveY = (e.pageY * -1) / 15;

        ref.current.style.backgroundPosition = `${moveX}px ${moveY}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
  }, []);
};

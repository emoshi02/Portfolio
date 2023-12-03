import { RefObject, useEffect } from 'react';

export const UseAnimate = (ref: RefObject<HTMLDivElement>) => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        const moveX = ((e.pageX * -1) / 15) * 8;
        const moveY = ((e.pageY * -1) / 15) * 8;

        ref.current.style.backgroundPosition = `${moveX}px ${moveY}px`;
      }
    };

    const handleScroll = () => {
      if (ref.current) {
        const scrollX = ((window.scrollY * -1) / 15) * 8;
        const scrollY = ((window.scrollY * -1) / 15) * 8;

        ref.current.style.backgroundPosition = `${scrollX}px ${scrollY}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

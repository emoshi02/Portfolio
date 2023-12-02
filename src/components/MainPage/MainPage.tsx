import React, { useRef } from 'react';
import ImageSlider from './ImageSlider';
import ItemList from './ItemList';
import logo from '../../assets/svg/logo.svg';
import { useAnimate } from '../../UseAnimate';
import { convertSVGToString } from '../../utils';

const MainPage = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  useAnimate(bgRef);
  return (
    <>
      <main className="mainBg" ref={bgRef}>
        <ImageSlider />
        <section className="main-body">
          <ItemList />
        </section>
        <section className="logo-wrapper">
          <img className="main-logo" src={convertSVGToString(logo)} />
        </section>
      </main>
    </>
  );
};

export default MainPage;

import React, { useRef } from 'react';
import ImageSlider from './ImageSlider';
import ItemList from './ItemList';
import logo from '../../assets/svg/logo.svg';
import { UseAnimate } from '../../../UseAnimate';

const MainPage = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  UseAnimate(bgRef);
  return (
    <>
      <main className="mainBg" ref={bgRef}>
        <ImageSlider />
        <div className="main-body">
          <ItemList />
        </div>
        <div className="logo-wrapper">
          <img className="main-logo" src={logo.toString()} />
        </div>
      </main>
    </>
  );
};

export default MainPage;

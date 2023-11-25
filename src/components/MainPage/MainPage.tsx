import React from 'react';
import ImageSlider from './ImageSlider';
import ItemList from './ItemList';
import logo from '../../assets/svg/logo.svg';

const MainPage = () => {
  return (
    <>
      <main>
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

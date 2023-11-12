import React from 'react';
import ImageSlider from './ImageSlider';
import ItemList from './ItemList';

const MainPage = () => {
  return (
    <>
      <main>
        <ImageSlider />
        <div className="main-body">
          <ItemList />
        </div>
        <div className="logo-wrapper">
          <div className="main-logo">Logo</div>
        </div>
      </main>
    </>
  );
};

export default MainPage;

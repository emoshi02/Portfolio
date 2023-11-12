import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import menu from '../assets/svg/menu.svg';

const Header = ({ openSideMenu }: { openSideMenu: (el: boolean) => void }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="header">
      <Link to={'/'}>
        <span className="home-items">
          <div className="logo">logo</div>
          <h4 className="author-name">Emilija Rackauskaite</h4>
        </span>
      </Link>
      <Navigation />
      <img
        className="menu"
        src={menu.toString()}
        alt="menu"
        onClick={() => {
          setIsOpen(!isOpen);
          openSideMenu(!isOpen);
        }}
      />
    </header>
  );
};

export default Header;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import menu from '../assets/svg/menu.svg';
import logo from '../assets/svg/logo.svg';
import { convertSVGToString } from '../utils';

const Header = ({
  setOpenSideMenu,
}: {
  setOpenSideMenu: (el: boolean) => void;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="header">
      <Link to={'/'}>
        <span className="home-items">
          <img src={convertSVGToString(logo)} className="logo" />
          <h4 className="author-name">Emilija Rackauskaite</h4>
        </span>
      </Link>
      <Navigation />
      <img
        className="menu"
        src={convertSVGToString(menu)}
        alt="menu"
        onClick={() => {
          setIsOpen(!isOpen);
          setOpenSideMenu(!isOpen);
        }}
      />
    </header>
  );
};

export default Header;

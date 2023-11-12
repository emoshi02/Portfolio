import React from 'react';
import { Link } from 'react-router-dom';

const SideMenu = () => {
  return (
    <div className="side-menu">
      <ul className="side-menu-items">
        <Link to={'/'}>
          <li className="side-menu-item">Pagrindinis</li>
        </Link>
        <Link to={'/About'}>
          <li className="side-menu-item">Apie</li>
        </Link>
        <li className="side-menu-item">CV</li>
      </ul>
    </div>
  );
};

export default SideMenu;

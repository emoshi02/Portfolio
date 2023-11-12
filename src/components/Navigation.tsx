import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav-items">
        <Link to={'/About'}>
          <li className="nav-item">Apie</li>
        </Link>
        <li className="nav-item">CV</li>
        <div className="nav-item icon"></div>
        <div className="nav-item icon"></div>
        <div className="nav-item icon"></div>
      </ul>
    </nav>
  );
};

export default Navigation;

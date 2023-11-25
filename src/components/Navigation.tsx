import React from 'react';
import { Link } from 'react-router-dom';
import facebookLogo from '../assets/svg/facebook.svg';
import linkedinLogo from '../assets/svg/linkedin.svg';
import emailLogo from '../assets/svg/email.svg';

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav-items">
        <Link to={'/About'}>
          <li className="nav-item">Apie</li>
        </Link>
        <li className="nav-item">CV</li>
        <img className="icon" src={emailLogo.toString()} />
        <img className="icon" src={linkedinLogo.toString()} />
        <img className="icon" src={facebookLogo.toString()} />
      </ul>
    </nav>
  );
};

export default Navigation;

import React from 'react';
import { Link } from 'react-router-dom';
import EmailLogo from '../assets/svg/EmailLogo';
import FacebookLogo from '../assets/svg/FacebookLogo';
import LinkedinLogo from '../assets/svg/LinkedinLogo';

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav-items">
        <Link to={'/About'}>
          <li className="nav-item">Apie</li>
        </Link>
        <li className="nav-item">CV</li>

        <li className="icon">
          <EmailLogo />
        </li>
        <li className="icon">
          <LinkedinLogo />
        </li>
        <li className="icon">
          <FacebookLogo />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

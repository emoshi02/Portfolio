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
        <li
          className="nav-item"
          onClick={() =>
            window.open(
              'https://drive.google.com/file/d/1eecz71GD59uQEKrB8UUV8xxXMJpVyLS8/view?fbclid=IwAR1Tzd19tlRSoUhk124rVEOZw5y68Pf87oOZbSOQrEVIJzdsvg22C1FTt44',
            )
          }
        >
          CV
        </li>

        <li
          className="icon"
          onClick={() => window.open('mailto:emilijarack49@gmail.com')}
        >
          <EmailLogo />
        </li>
        <li
          className="icon"
          onClick={() =>
            window.open(
              ' https://www.linkedin.com/in/emilija-ra%C4%8Dkauskait%C4%97-173449223/',
            )
          }
        >
          <LinkedinLogo />
        </li>
        <li
          className="icon"
          onClick={() =>
            window.open('https://www.facebook.com/emile.rackauskaite/')
          }
        >
          <FacebookLogo />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

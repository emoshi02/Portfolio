import React from 'react';
import AuthorName from './AuthorName';
import EmailLogo from '../../assets/svg/EmailLogo';
import FacebookLogo from '../../assets/svg/FacebookLogo';
import LinkedinLogo from '../../assets/svg/LinkedinLogo';

const FooterMobile = () => {
  return (
    <footer>
      <div className="footer-wrapper--mobile">
        <div className="nav-wrapper--mobile">
          <ul className="nav--mobile">
            <li>Apie</li>
            <li>CV</li>
          </ul>
          <ul className="icons--mobile">
            <li className="icon">
              <EmailLogo />
            </li>
            <li className="icon">
              <LinkedinLogo />
            </li>
            <li>
              <FacebookLogo />
            </li>
          </ul>
        </div>
        <AuthorName />
      </div>
    </footer>
  );
};

export default FooterMobile;

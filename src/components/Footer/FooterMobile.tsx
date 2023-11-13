import React from 'react';
import AuthorName from './AuthorName';

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
            <li className="icon"></li>
            <li className="icon"></li>
            <li className="icon"></li>
          </ul>
        </div>
        <AuthorName />
      </div>
    </footer>
  );
};

export default FooterMobile;

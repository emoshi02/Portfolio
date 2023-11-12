import React from 'react';

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
        <h4 className="author-name footer-name">
          © 2023 Emilija Rackauskaite
        </h4>
      </div>
    </footer>
  );
};

export default FooterMobile;

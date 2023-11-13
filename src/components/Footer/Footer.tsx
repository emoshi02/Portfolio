import React from 'react';
import Navigation from '../Navigation';
import AuthorName from './AuthorName';

const Footer = () => {
  return (
    <footer className="footer">
      <AuthorName />
      <Navigation />
    </footer>
  );
};

export default Footer;

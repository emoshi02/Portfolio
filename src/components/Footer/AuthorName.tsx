import React from 'react';

const AuthorName = () => {
  const date = new Date();

  return (
    <h4 className="author-name footer-name">{`© ${date.getFullYear()} Emilija Rackauskaite`}</h4>
  );
};

export default AuthorName;

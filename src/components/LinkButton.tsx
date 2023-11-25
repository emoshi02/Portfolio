import React from 'react';

const LinkButton = ({ label }: { label: string }) => {
  return (
    <div className="btn-container">
      <button className="button-link">{label}</button>
    </div>
  );
};

export default LinkButton;

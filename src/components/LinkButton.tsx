import React from 'react';

const LinkButton = ({ label, url }: { label: string; url: string }) => {
  return (
    <div className="btn-container">
      <button
        className="button-link"
        onClick={() => window.open(`${url} `, '')}
      >
        {label}
      </button>
    </div>
  );
};

export default LinkButton;

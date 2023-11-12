import React from 'react';
import { Data } from '../projectData';

const ProjectItem = ({ label, desc }: Data) => {
  return (
    <div className="item-wrapper">
      <div className="project-image"></div>
      <h3 className="item-label">{label}</h3>
      <p className="item-desc">{desc}</p>
    </div>
  );
};

export default ProjectItem;

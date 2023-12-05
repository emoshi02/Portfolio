import React from 'react';
import { Data } from '../../projectData';

const ProjectItem = ({ label, desc, image }: Partial<Data>) => {
  return (
    <>
      <div className="item-wrapper">
        <img className="project-image" src={image} />
        <h3 className="label-item">{label}</h3>
        <p className="aditional-desc">{desc}</p>
      </div>
    </>
  );
};

export default ProjectItem;

import React from 'react';
import { Data } from '../../projectData';
import arrow from '../../assets/svg/Trumpa rodykle.svg';
import { convertSVGToString } from '../../utils';

const ProjectItem = ({
  label,
  desc,
  image,
  arrowClass,
}: Partial<Data & { arrowClass: string }>) => {
  return (
    <>
      <div className="item-wrapper">
        <img className={arrowClass} src={convertSVGToString(arrow)} />
        <img className="project-image" src={image} />
        <h3 className="label-item">{label}</h3>
        <p className="aditional-desc">{desc}</p>
      </div>
    </>
  );
};

export default ProjectItem;

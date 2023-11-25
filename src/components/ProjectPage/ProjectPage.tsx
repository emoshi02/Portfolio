import React from 'react';
import { useParams } from 'react-router';
import { data } from '../../projectData';
import LinkButton from '../LinkButton';

const ProjectPage = () => {
  const id = useParams();
  const { label, desc, info, secDesc, galery } = data[Number(id.id)];

  return (
    <>
      <main className="project-info-wrapper">
        <div className="project-image--full-height"></div>
        <div className="info">
          <div className="project-info-label">
            <h1 className="label">{label}</h1>
            <h2 className="desc">{desc}</h2>
          </div>
          <p className="project-info">{info}</p>
          <LinkButton label="Figma" />
        </div>
      </main>
      <div className="additional-info-wrapper">
        <p className="aditional-desc">{secDesc}</p>
        <div className="galery-wrapper">
          {galery.map((item, index) => (
            <div className="galery-item" key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectPage;

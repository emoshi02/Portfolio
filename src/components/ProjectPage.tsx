import React from 'react';
import { useParams } from 'react-router';
import { data } from '../projectData';

const ProjectPage = () => {
  const id = useParams();
  const { label, desc, info, secDesc, galery } = data[Number(id.id)];

  return (
    <>
      <main className="project-info-wrapper">
        <div className="project-image--full-height"></div>
        <div className="info">
          <div className="project-info-label">
            <h1>{label}</h1>
            <h2>{desc}</h2>
          </div>
          <p>{info}</p>
          <button className="button-link">Figma</button>
        </div>
      </main>
      <div className="additional-info-wrapper">
        <p className="aditional-desc">{secDesc}</p>
        <div className="galery-wrapper">
          {galery.map((_, index) => (
            <div className="galery-item" key={index}></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectPage;

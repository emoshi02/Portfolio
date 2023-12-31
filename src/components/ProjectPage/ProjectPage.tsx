import React, { useRef } from 'react';
import { useParams } from 'react-router';
import { data } from '../../projectData';
import LinkButton from '../LinkButton';
import { useAnimate } from '../../UseAnimate';

const ProjectPage = () => {
  const id = useParams();
  const { label, desc, info, secDesc, galery, mainImage, url } =
    data[Number(id.id)];

  const bgRef = useRef<HTMLDivElement>(null);
  useAnimate(bgRef);

  return (
    <section
      className={`${
        desc.toLowerCase() === 'programavimas' ? 'progrBg' : 'designBg'
      }`}
      ref={bgRef}
    >
      <main className="project-info-wrapper">
        <img className="project-image--full-height" src={mainImage} />
        <div className="info">
          <div className="project-info-label">
            <h1 className="label">{label}</h1>
            <h2 className="desc">{desc}</h2>
          </div>
          <p className="project-info">{info}</p>
          <LinkButton
            label={`${
              desc.toLowerCase() === 'programavimas' ? 'GitHub' : 'Figma'
            }`}
            url={url}
          />
        </div>
      </main>
      <section className="additional-info-wrapper">
        <p className="aditional-desc">{secDesc}</p>
        <div className="galery-wrapper">
          {galery.map((item, index) => (
            <img className="galery-item" key={index} src={item} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default ProjectPage;

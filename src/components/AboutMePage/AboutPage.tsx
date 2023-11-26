import React, { useRef } from 'react';
import { designIcons, programmingIcons } from '../../skills';
import ExperienceDiagram from './ExperienceDiagram';
import Skills from './Skills';
import { animateBg } from '../../../bgImageAnimation';

const AboutPage = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  animateBg(bgRef);

  return (
    <main className="mainBg" ref={bgRef}>
      <div className="about-me-page">
        <div className="about-me-wrapper">
          <h1 className="label">Apie mane.</h1>
          <p className="aditional-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <ExperienceDiagram />
      <div className="experience-text-wrapper">
        <p className="aditional-desc exp-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="skill-wrapper">
        <Skills
          skillLabel="Programavimo Įgūdžiai"
          skillArray={programmingIcons}
        />
        <Skills skillLabel="Dizaino Įgūdžiai" skillArray={designIcons} />
      </div>
    </main>
  );
};

export default AboutPage;

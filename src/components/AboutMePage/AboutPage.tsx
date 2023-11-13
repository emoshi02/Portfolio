import React from 'react';
import { designIcons, programmingIcons } from '../../skills';
import ExperienceDiagram from './ExperienceDiagram';
import Skills from './skills.';

const AboutPage = () => {
  return (
    <>
      <span className="about-me-wrapper">
        <div className="info">
          <h1>Apie mane.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="about-photo"></div>
      </span>
      <ExperienceDiagram />
      <div className="experience-text-wrapper">
        <p className="experience-text">
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
        <Skills skillArray={programmingIcons} />
        <Skills skillArray={designIcons} />
      </div>
    </>
  );
};

export default AboutPage;

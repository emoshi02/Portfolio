import React from 'react';
import { experienceData } from '../experienceData';
import { designIcons, programmingIcons } from '../skills';

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
      <div className="experience-info-wrapper">
        <div className="experience-info">
          {experienceData.map((data, index) => (
            <>
              {index % 2 === 0 && <div key={`empty-before-${index}`}></div>}
              <div
                className="experience-data experience-container"
                key={`experience-${index}`}
              >
                {data.experience}
              </div>
              {index % 2 === 1 && (
                <div
                  className="experience-container"
                  key={`empty-after-${index}`}
                ></div>
              )}
            </>
          ))}
        </div>
      </div>
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
        <div className="skill">
          <h1>Lorem Ipsum</h1>
          <div className="icon-wrapper">
            {programmingIcons.map((_, index) => (
              <div className="skill-icon" key={`programming ${index}`}></div>
            ))}
          </div>
        </div>
        <div className="skill">
          <h1>Lorem Ipsum</h1>
          <div className="icon-wrapper">
            {designIcons.map((_, index) => (
              <div className="skill-icon" key={`design ${index}`}></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;

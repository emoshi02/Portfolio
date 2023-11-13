import React, { Fragment } from 'react';
import { experienceData } from '../../experienceData';

const ExperienceDiagram = () => {
  return (
    <div className="experience-info-wrapper">
      <div className="experience-info">
        {experienceData.map((data, index) => (
          <Fragment key={index}>
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
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default ExperienceDiagram;

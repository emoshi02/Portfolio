import React from 'react';

const Skills = ({
  skillLabel,
  skillArray,
}: {
  skillLabel: string;
  skillArray: string[];
}) => {
  return (
    <div className="skill">
      <h1 className="label">{skillLabel}</h1>
      <div className="icon-wrapper">
        {skillArray.map((item, index) => (
          <img className="skill-icon" key={index} src={item} />
        ))}
      </div>
    </div>
  );
};

export default Skills;

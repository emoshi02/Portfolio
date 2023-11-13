import React from 'react';

const Skills = ({ skillArray }: { skillArray: string[] }) => {
  return (
    <div className="skill">
      <h1>Lorem Ipsum</h1>
      <div className="icon-wrapper">
        {skillArray.map((_, index) => (
          <div className="skill-icon" key={index}></div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

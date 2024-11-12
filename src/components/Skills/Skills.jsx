// src/components/Skills/Skills.js

import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { src:'src/components/images/html5.png', name: 'HTML', level: 90 },
    { src:'src/components/images/css.png', name: 'CSS', level: 80 },
    { src:'src/components/images/javascript.png', name: 'JavaScript', level: 85 },
    { src:'src/components/images/react.png', name: 'React', level: 65 },
    { src:'src/components/images/delphi.png', name: 'Delphi', level: 85 },
    // Añade más habilidades según sea necesario

    
  ];
  
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill) => (
          <div className="skill" key={skill.name}>
           
            <span className="skill-name">{skill.name}</span>
            <div className="skill-level">
            <img src={skill.src} alt="" className="skill-img" />
              <div
                className="skill-bar" id='skill-bar'
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

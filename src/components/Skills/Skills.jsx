// src/components/Skills/Skills.js

import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 80 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 75 },
    { name: 'Delphi', level: 70 },
    // Añade más habilidades según sea necesario
  ];

  return (
    <section id="skills" className="skills">
      <h2>Mis Habilidades</h2>
      <div className="skills-list">
        {skills.map((skill) => (
          <div className="skill" key={skill.name}>
            <span className="skill-name">{skill.name}</span>
            <div className="skill-level">
              <div
                className="skill-bar"
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

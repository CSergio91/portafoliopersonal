// src/components/Skills/Skills.js

import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { src:'src/components/images/html5.png', name: 'HTML'},
    { src:'src/components/images/css.png', name: 'CSS'},
    { src:'src/components/images/javascript.png', name: 'JavaScript'},
    { src:'src/components/images/react.png', name: 'React',},
    { src:'src/components/images/delphi.png', name: 'Delphi'},
    { src:'src/components/images/materialUI.png', name: 'Material UI'},
    { src:'src/components/images/figma.png', name: 'Figma'},
    { src:'src/components/images/adobe-photoshop.png', name: 'Photoshop'},
    { src:'src/components/images/github.png', name: 'Git'},
    // Añade más habilidades según sea necesario

    
  ];
  
  return (
    <section id="" className="skills">
      <skillsh1>Skills</skillsh1>
      <div className="skills-list">
        {skills.map((skill) => (
          <div className="skill" key={skill.name}>
           
            <span className="skill-name">{skill.name}</span>
            <div className="skill-level">
            <img src={skill.src} alt="" className="skill-img" />
              
            
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

// src/components/Skills/Skills.js

// eslint-disable-next-line no-unused-vars
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
    { src:'src/components/images/github.png', name: 'GitHub'},
    { src:'src/components/images/git.png', name: 'Git'}
    // Añade más habilidades según sea necesario

    
  ];
  
  return (
    <section id="skills" className="skills">
      <h1>Skills</h1>
      <div className="skills-list">
        {skills.map((skill) => (
          <div className="skillss" key={skill.name}>
            <span className="skill-name">{skill.name}</span>
            <img src={skill.src} alt="" className="skill-img" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

// src/components/ProjectCard.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Button from '../reutilizables/Button';
import github from '../images/github.png';
import desploy from '../images/despliegue.png';

// eslint-disable-next-line react/prop-types
const ProjectCard = ({title, description, image, link, tags, tags1, tags2, tags3, tags4, tags5}) => {
  return (
    <div className="project-card">
      
       <div className="zoom">
      <img src={image} alt={title} className="project-image" />
      <div className="content-but">
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
        <Button src={github} href={link} />
        </a>
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
        <Button src={desploy} href={link} />
        </a>
      </div>
      
      </div>
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
     
      <div className="content-tags">
        <div className="tags">{tags}</div>
        <div className="tags">{tags1}</div>
        <div className="tags">{tags2}</div>
        <div className="tags">{tags3}</div>
      </div>
      
    </div>
  );
};

export default ProjectCard;

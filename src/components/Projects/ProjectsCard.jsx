// src/components/ProjectCard.js
import React from 'react';

// eslint-disable-next-line react/prop-types
const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
        Ver Proyecto
      </a>
    </div>
  );
};

export default ProjectCard;

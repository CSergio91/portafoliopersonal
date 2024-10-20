// src/components/Projects.js
import React from 'react';
import ProjectCard from './ProjectsCard.jsx';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Proyecto 1',
      description: 'Descripción del Proyecto 1.',
      image: 'url-de-imagen-1.jpg',
      link: 'https://link-al-proyecto-1.com',
    },
    {
      title: 'Proyecto 2',
      description: 'Descripción del Proyecto 2.',
      image: 'url-de-imagen-2.jpg',
      link: 'https://link-al-proyecto-2.com',
    },
    // Agrega más proyectos según sea necesario
  ];

  return (
    <div className="projects">
      <h2>Mis Proyectos</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

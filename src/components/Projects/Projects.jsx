// src/components/Projects.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import ProjectCard from './ProjectsCard.jsx';
import './Projects.css';
import projectCV from '../images/ProjectCV.png';
import adopta from '../images/ProjectAUV.png';





const Projects = () => {

  const projects = [
    {
      title: 'Mi Portafolio Personal',
      description: 'Resumen de mis habilidades como Desarrollador Web, asi como otras ramas en las que me puedo desempeñar',
      image: `${projectCV}`,
      link: 'https://link-al-proyecto-1.com',  
      tags: 'HTML', tags1: 'CSS', tags2: 'JavScript', tags3: 'React',
    },
    {
      title: 'Adopta un Valenciano',
      description: 'Nuestro objetivo es fomentar un espacio de colaboración y empatía, donde cada gesto de solidaridad, por pequeño que sea, tenga un impacto significativo. Creemos en el poder de la comunidad y en la importancia de unir esfuerzos para superar juntos cualquier adversidad, construyendo un futuro más fuerte y lleno de posibilidades para todos.',
      image: `${adopta}`,
      link: 'https://adoptaunvalenciano.es/',
      tags: 'HTML', tags1: 'CSS', tags2: 'JavScript', tags3: 'React',
    },
    {
      title: 'Proyecto 2',
      description: 'Descripción del Proyecto 2.',
      image: `${projectCV}`,
      link: 'https://link-al-proyecto-2.com',
      tags: 'HTML', tags1: 'CSS', tags2: 'JavScript', tags3: 'React',
    },
    {
      title: 'Proyecto 2',
      description: 'Descripción del Proyecto 2.',
      image: `${projectCV}`,
      link: 'https://link-al-proyecto-2.com',
      tags: 'HTML', tags1: 'CSS', tags2: 'JavScript', tags3: 'React',
    },
    // Agrega más proyectos según sea necesario
  ];

  return (
    <section className="projects-container">
      <h1>Mis Proyectos</h1>
    <div className="projects" id='projects'>
      
      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            tags={project.tags}
            tags1={project.tags1}
            tags2={project.tags2}
            tags3={project.tags3}
          />
        ))}
      </div>
    </div>
    </section>
  );
};

export default Projects;

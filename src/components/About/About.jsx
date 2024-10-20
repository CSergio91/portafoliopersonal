// src/components/Hero/Hero.js

import React from 'react';
import './About.css';

const Hero = () => {
  return (
    <section className="hero">
      <h1>Hola, soy [Tu Nombre]</h1>
      <p>
        Soy un desarrollador web con experiencia en la creación de aplicaciones
        modernas y responsivas. Me especializo en tecnologías como React y
        tengo un sólido conocimiento en HTML, CSS y JavaScript. Mi enfoque es
        crear soluciones que no solo sean funcionales, sino que también
        ofrezcan una experiencia de usuario excepcional.
      </p>
      <a href="#projects" className="cta-button">Ver Proyectos</a>
    </section>
  );
};

export default Hero;


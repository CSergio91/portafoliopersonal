// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.</p>
        <div className="social-links">
          <a href="https://github.com/tu_usuario" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/tu_usuario" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          {/* Agrega más enlaces a redes sociales según sea necesario */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

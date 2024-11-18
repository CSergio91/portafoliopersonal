import React, { useState } from 'react';
import './Navbar.css'; // Asegúrate de tener un archivo CSS para el Navbar
import logo from '../images/logo.png';


const Navbar = ({ toggleTheme, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar el menú

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Alternar el estado del menú 
  };

  return (
    <nav id='navigate'  className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="logo">
      <img src={logo} alt="A tu Estilo" className="profile-pic" />
      <h1> Life-Folio</h1>
      </div>
      <div className="logo"></div>
        
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
        <div className="logo">
       
      </div>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#about">Sobre mí</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#arriba">Contacto</a></li>
      </ul>
      <div className="theme-toggle" onClick={toggleTheme}>
        {isDarkMode ? '🌙' : '☀️'} {/* Icono para alternar el tema */}
      </div>
    </nav>
  );
};

export default Navbar;

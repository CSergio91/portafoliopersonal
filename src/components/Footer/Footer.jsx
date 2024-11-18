// src/components/Footer.js
import React from 'react';
import logo from '../images/Logo.png';

import './Footer.css';


const Footer = () => {
  return (
    <footer id='#contacto' className="footer">
      <div className="footer-content">
        <p className='copyright'>© {new Date().getFullYear()} <span>Carlos</span> Sergio Martinez Vergel</p>
        <a href='#arriba'><img width='80px' src={logo} alt="" /></a>
        </div>
    </footer>
    
  );
};

export default Footer;

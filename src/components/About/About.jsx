// src/components/Hero/Hero.js

import React from "react";
import "./About.css";
import selfie from "../images/selfie.jpg";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import descargarCV from "../images/descarga.png";

const Hero = () => {
  return (
    <div className="home_container">
        <section className="hero">
          <div className="section_container">
            <img src={selfie} alt=""/>
            </div>
           
        <div className="section_container">
          <h1>Hola, soy Carlos Sergio Martinez Vergel</h1>
          <h2>Junior - Desarrollador Web</h2>
          <div className="content_redes">
          <div className="redes_icons"><a href="#projects">
            <img src={github} alt="" className="icons"/>
            
          </a></div>
          <div className="redes_icons"><a href="#projects" >
          <img src={linkedin} alt="" />
          
          </a></div>
          <div className="redes_icons"><a href="#projects" >
          <img src={descargarCV} alt="" />
          </a></div>
          </div>
          </div>
        </section>
      </div>
   
  );
};

export default Hero;

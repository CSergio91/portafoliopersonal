// src/components/Hero/Hero.js

import React from "react";
import "./About.css";
import selfie from "../images/selfie.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import descargarCV from "../images/descarga.png";
import junior from "../images/junior.png";
import location from "../images/loc.png";
import Button from "../reutilizables/Button";

const Hero = () => {

  const linkedinurl='https://www.linkedin.com/in/carlos-sergio-martinez-vergel';
  const githuburl='https://github.com/CSergio91';

  return (
    <div id="arriba" className="home_container">
        <section className="hero">
          <div className="section_container">
            <img src={selfie} alt="" className="logoimg"/>
            <div className="categ_container">
            <img width='40px' height='40px' src={junior} alt="" className="deslogo" /><h3>JUNIOR - Desarrollador  <span> Frontend</span></h3>
            </div>
            
            <div className="categ_container">
            <img width='40px' height='40px' src={location} alt="" className="deslogo" /><h3>Valencia, España<span></span></h3>
            </div>
           </div>
        <div className="section_container">
          <h1>!Hol@, soy <strong>Carlos Sergio..</strong></h1>
          <p>Apasionado por la tecnología. He descubierto el maravilloso mundo del deiseño Web. Me especializo en la creacion de paginas Web responsive y dinámicas. Busco siempre reencontrarme con implementaciones novedosas.
            Me encanta ir más allá. 
            Puedo ser tu mejor compañero de equipo. 
          </p>
         <div className="cont-redes">
          <Button src={descargarCV} label='Descargar CV'/>
          <Button href={githuburl} src={github} label='GitHub'/>
          <Button href={linkedinurl} src={linkedin} label='Linkedin'/>
         </div>
          </div>
        </section>
      </div>
   
  );
};

export default Hero;

// src/components/Hero/Hero.js

import React from "react";
import "./About.css";
import selfie from "../images/selfie.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import descargarCV from "../images/descargar1.png";
import junior from "../images/junior.png";
import location from "../images/loc1.png";
import emailsend from "../images/email1.png";
import copiar from "../images/copy1.png";
import hola from "../images/hola.png";

import Button from "../reutilizables/Button";
import { copiarGmail } from "./Copiar.js";
import Etiqueta from "../reutilizables/Etiqueta.jsx";

const Hero = () => {
  const linkedinurl =
    "https://www.linkedin.com/in/carlos-sergio-martinez-vergel";
  const githuburl = "https://github.com/CSergio91";
  const email = "servtecempmant@gmail.com";

  const Copiar = () => {
    copiarGmail(email);
  };

  return (
    <div id="arriba" className="home_container">
      <section className="hero">
        <div className="section_container">
          <div className="profile">
            <img src={selfie} alt="" className="logoimg" />
            <div className="int-profile">
              <Etiqueta
                alt="Desarrollador Web -Frontend-"
                src={junior}
                label="» Desarrollador Web FrontEND » Especialista en Hardware »Diseñador UI/UX"
              />
              <Etiqueta
                alt="Valencia, España"
                src={location}
                label="» Valencia, España"
              />
              <div className="email1">
                <Etiqueta
                  alt="Valencia, España"
                  src={emailsend}
                  label={email}
                />
                <img
                  title="Copiar correo"
                  onClick={Copiar}
                  width="20px"
                  height="20px"
                  src={copiar}
                  alt="Copiar correo"
                  className="copiarimg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="section_container">
          <h1>
            !Hol@{" "}
            <img
              width="40px"
              src={hola}
              alt="Copiar correo"
              className="copiarimg"
            />
            , soy <strong>Carlos Sergio..</strong>
          </h1>
          <p className="descript">
            Soy un <strong>desarrollador web</strong>
            apasionado por crear experiencias digitales innovadoras. Me
            especializo en el diseño de páginas web <strong>
              responsive
            </strong>{" "}
            y <strong>dinámicas</strong>. Busco constantemente nuevas
            oportunidades para aplicar mis conocimientos en proyectos
            desafiantes. Si quisieras contactarme para colaborar conmigo
            escribeme a <strong>servtecempmant@gmail.com</strong>
            <img
              title="Copiar correo"
              onClick={Copiar}
              width="30px"
              src={copiar}
              alt="Copiar correo"
              className="copiarimg"
            />
          </p>
          <div className="cont-redes">
            <Button src={descargarCV} label="Descargar CV" />
            <Button href={githuburl} src={github} label="GitHub" />
            <Button href={linkedinurl} src={linkedin} label="Linkedin" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

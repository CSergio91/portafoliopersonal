// src/components/About/About.js

import React from 'react';
import './Cuerpo.css';
import Experincia from './Experincia';

const About = () => {
  return (
    <section id="about" className="about">
       <h1>Sobre Mí</h1>
      <div className="content_about">
     
      <p>
        Soy un desarrollador web con un enfoque en la creación de experiencias
        digitales efectivas y atractivas. Con experiencia en [tecnologías que dominas],
        he trabajado en varios proyectos que me han permitido perfeccionar mis
        habilidades y aprender nuevas tecnologías. Me apasiona la tecnología y
        siempre estoy en busca de nuevos desafíos que me permitan crecer y
        contribuir al éxito de mis clientes y proyectos.
      </p>
      <p>
        En mi tiempo libre, disfruto de [hobbies o intereses personales que
        quieres compartir], lo que me ayuda a mantenerme creativo y motivado.
      </p>
      </div>
<div className='space'></div>
<div className='space'></div>
      <section className="experiencia">
      <Experincia title='Especialista en Informática, Administración de Red y Seguridad Informática.' 
      exp_description='Puesto como Jefe de Informática, en un almacén de una empresa comercial, donde almacenaban mercancía para el comercio, mis funciones eran:
 Administración de Toda la Re de la empresa mediante software como Remote Desktop, lo cual me permitía tener un control más profundo de cada usuario y equipo dentro de mi red de Trabajo, así como acceso a los servidores para dar soluciones a problemas que se podrían presentar.
 Dar Soporte a la oficina de Economía durante los cierres Mensuales de la Facturación de la empresa, usando para ello consultas sobre SQL cuando existían diferencias de facturas por errores al crearla.
 Mantenimiento y Montaje de Equipos de Cómputos (impresoras, PC, Mouse, Teclados) de manera periódica para mantener un correcto funcionamiento de los mismos.
 Instalación y actualización de software necesarios para el trabajo de Facturación y de Economía cuando lanzaban nuevas versiones de los mismos.
 Además Desarrollé Sistemas de Consultas sobre Delphi 7, para diferentes áreas de la empresa, para ahorrar tiempo en algunas de las tareas diarias de los usuarios. Programas o Software que fueron aprobados por superiores e implementados posteriormente en los departamentos relacionados con los mismos.' 
fecha='Enero 2015 – Febrero 2016.'/>

<Experincia title='Reparador de Computadoras y/o Montaje de los mismos.' 
      exp_description='Trabajo con clientes, ventas, envíos y montajes de equipos de computación.' 
fecha='Septiembre 2016 – Agosto 2023'/>

<Experincia title='Agente Comercial (Compra/Venta-Cartera de Clientes).' 
      exp_description='Durante ese periodo, trabaje de forma autónoma, en la compra y venta de equipos electrónicos, así como el montaje de los mismos, manejando una amplia cartera de clientes, donde de forma eficiente, lograba llegar a acuerdos de ventas.
Mi capacidad de dominar los sistemas informáticos me permitió tener bases de datos, así como lograr de forma oportuna y sistemática un control sobre cada cliente, e incluso, tener un registro de otras necesidades de los mismos en el campo comercial, a tener en cuenta según disponibilidad en stock.' 
fecha='Agosto 2015 - Julio 2023'/>

<Experincia title='Ayudante de albañilería.' 
      exp_description='Labor realizada como Autónomo.' 
fecha='Agosto 2012 - Mayo 2014'/>

<Experincia title='Especialista en Exploración de Radio y Radiotecnia.' 
      exp_description='Fui Explorador de radio en las Fuerzas Armadas de Cuba. Dentro de ese periodo desarrolle Aplicaciones Multimedias en Autoplay presentadas a nivel nacional. Además cree sistemas basadas en Base de Datos en Microsoft Acces, estos sistemas sustituyeron sistemas muy obsoletos y aumentó la velocidad de transmisión y recepción de la información.
Como Especialista, desarrollé la capacidad de escuchar la aviación mediante contactos de Radio en Idioma Ingles.
Clases particulares individuales de informática básica durante el verano.' 
fecha='Mayo 2009 - Julio 2015'/>
    </section>
    </section>
    
  );
};

export default About;

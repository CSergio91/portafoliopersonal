import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import About from "./components/About/About.jsx";
import Cuerpo from "./components/Cuerpo/Cuerpo.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Blog from "./components/Blog/Blog.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Estado para el modo oscuro

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode); // Alternar entre modos
  };

  return (
    <div id='main_container' className={isDarkMode ? "app dark" : "app light"}>
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <About />
      <Skills />
      <Cuerpo />
      
      <Projects />
      <Footer />
     
    </div>
  );
};

export default App;

import React from "react";
import Home from "../../../pages/Home/Home";
import About from "../../../pages/About/About";
import Education from "../../../pages/Education/Education";
import Skills from "../../../pages/Skills/Skills";
import Experience from "../../../pages/Experience/Experience";

const MainSection = ({ experience }) => {
  return (
    <div>
      <Home />
      <About experience={experience} />
      <Education />
      <Skills />
      <Experience />
    </div>
  );
};

export default MainSection;

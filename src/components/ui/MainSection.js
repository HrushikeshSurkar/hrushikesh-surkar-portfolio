import React from "react";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Education from "../../pages/Education";
import Skills from "../../pages/Skills";

const MainSection = ({ experience }) => {
  return (
    <div>
      <Home />
      <About experience={experience} />
      <Education />
      <Skills />
    </div>
  );
};

export default MainSection;

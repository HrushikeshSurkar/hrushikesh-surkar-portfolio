import React from "react";
import Home from "../../../pages/Home/Home";
import About from "../../../pages/About/About";
import Education from "../../../pages/Education/Education";
import Skills from "../../../pages/Skills/Skills";
import Experience from "../../../pages/Experience/Experience";
import Blogs from "../../../pages/Blogs/Blogs";

const MainSection = ({ experience }) => {
  return (
    <div>
      <Home />
      <About experience={experience} />
      <Education />
      <Skills />
      <Experience />
      <Blogs />
    </div>
  );
};

export default MainSection;

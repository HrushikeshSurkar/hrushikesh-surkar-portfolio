import React from "react";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Education from "../../pages/Education";

const MainSection = ({ experience }) => {
  return (
    <div>
      <Home />
      <About experience={experience} />
      <Education />
    </div>
  );
};

export default MainSection;

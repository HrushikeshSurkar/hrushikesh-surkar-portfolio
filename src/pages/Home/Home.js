import React from "react";
import "./Home.css";
const HeroSection = () => {
  const handleButtonClick = () => {
    window.open("https://github.com/HrushikeshSurkar", "_blank");
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <p className="hero-subtitle">Explore my work and projects</p>
        <button className="hero-button" onClick={handleButtonClick}>
          View Projects
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

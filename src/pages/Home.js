import React from "react";
import "../styles/pages/Home.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span>Welcome</span> to My Portfolio
        </h1>
        <p className="hero-subtitle">Explore my work and projects</p>
        <button className="hero-button">View Projects</button>
      </div>
    </section>
  );
};

export default HeroSection;

import React from "react";
import About from "./About";
import "../styles/pages/Home.css";
const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Hrushikesh Surkar</h1>
        <p>Let's Code Together ..!</p>
        <button>View Projects</button>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <HeroSection />
      {/* About Section */}
      {/* <About /> */}
      {/* ... other sections (Skills, Projects, Contact) */}
    </div>
  );
};

export default Home;

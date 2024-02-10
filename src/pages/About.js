// About.js

import React from "react";
import "../styles/pages/About.css";
import HrushikeshSurkarImage from "../assets/HrushikeshSurkar.png";

const About = ({ experience }) => {
  return (
    <section className="about-page">
      <div className="about-content">
        <div className="left-section">
          <h2 className="section-title">Who I am</h2>
          <p className="about-description">
            My name's Hrushikesh. I'm a web designer and developer based in
            Nagpur, India.
          </p>
          <p className="more-text">
            I'm passionate about creating beautiful and functional websites that
            provide great user experiences. With {experience} of experience in
            web development, I specialize in front-end technologies such as
            HTML, CSS, and JavaScript, as well as frameworks like React.js.
          </p>
        </div>
        <div className="separator"></div>
        <div className="right-section">
          <img
            src={HrushikeshSurkarImage}
            alt="Hrushikesh Surkar"
            className="profile-image"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

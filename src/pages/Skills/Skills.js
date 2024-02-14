// Skills.js

import React from "react";
import CommonHeader from "../../components/ui/CommonHeader/CommonHeader";
import "./Skills.css";
import html from "../../assets/skills-icons/html.jpg";
import css from "../../assets/skills-icons/css.jpg";
import js from "../../assets/skills-icons/js.jpg";
import angular from "../../assets/skills-icons/angular.jpg";
import react from "../../assets/skills-icons/react.png";

const Skills = () => {
  return (
    <section className="skills-section">
      <CommonHeader
        title={"Skills"}
        bgColorForHeader={"--main-color"}
        colorForHeader={"--main-bg-color"}
      />
      <div className="skills-main-content-wrap">
        <div className="skills-card-wrap">
          <div className="skills-card-inner">
            <div className="skills-card-front">
              <img src={html} alt="HTML" />
            </div>
            <div className="skills-card-back">
              <div className="card-overlay">
                <span className="knowledge-percent">95%</span>
              </div>
              <div>HTML</div>
            </div>
          </div>
        </div>
        <div className="skills-card-wrap">
          <div className="skills-card-inner">
            <div className="skills-card-front">
              <img src={css} alt="CSS" />
            </div>
            <div className="skills-card-back">
              <div className="card-overlay">
                <span className="knowledge-percent">70%</span>
              </div>
              <div>CSS</div>
            </div>
          </div>
        </div>
        <div className="skills-card-wrap">
          <div className="skills-card-inner">
            <div className="skills-card-front">
              <img src={js} alt="JavaScript" />
            </div>
            <div className="skills-card-back">
              <div className="card-overlay">
                <span className="knowledge-percent">75%</span>
              </div>
              <div>JavaScript</div>
            </div>
          </div>
        </div>
        <div className="skills-card-wrap">
          <div className="skills-card-inner">
            <div className="skills-card-front">
              <img src={angular} alt="Angular" />
            </div>
            <div className="skills-card-back">
              <div className="card-overlay">
                <span className="knowledge-percent">78%</span>
              </div>
              <div>Angular</div>
            </div>
          </div>
        </div>
        <div className="skills-card-wrap">
          <div className="skills-card-inner">
            <div className="skills-card-front">
              <img src={react} alt="React" />
            </div>
            <div className="skills-card-back">
              <div className="card-overlay">
                <span className="knowledge-percent">72%</span>
              </div>
              <div>React</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

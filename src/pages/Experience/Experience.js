import React from "react";
import "./Experience.css";
import CommonHeader from "../../components/ui/CommonHeader/CommonHeader";
import Card from "../../components/ui/Card/Card";
import { GiProgression } from "react-icons/gi";
const Experience = () => {
  return (
    <section className="education-section">
      <CommonHeader
        title={"Experience"}
        bgColorForHeader={" --main-bg-color"}
        colorForHeader={"--main-color"}
      />
      <div className="education-main-content-wrap">
        <div className="education-icon-wrap">
          <GiProgression className="education-icon-main" />
        </div>
        <div className="education-cards">
          <Card
            educationPlace="Nagpur"
            year="(6 Months)"
            educationTitle="Cresentweb Technologies"
          />
          <Card
            educationPlace="Nagpur"
            year="(6 Months)"
            educationTitle="AnkHub Technology Services"
          />
          <Card
            educationPlace="Nagpur"
            year="2023-Present"
            educationTitle="Grate Place IT Services"
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;

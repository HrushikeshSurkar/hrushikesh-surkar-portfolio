import React from "react";
import CommonHeader from "../../components/ui/CommonHeader/CommonHeader";
import Card from "../../components/ui/Card/Card";
import "./Education.css";
import { FaBook } from "react-icons/fa";

const Education = () => {
  return (
    <section className="education-section">
      <CommonHeader
        title={"Education"}
        bgColorForHeader={" --main-bg-color"}
        colorForHeader={"--main-color"}
      />
      <div className="education-main-content-wrap">
        <div className="education-icon-wrap">
          <FaBook className="education-icon-main" />
        </div>
        <div className="education-cards">
          <Card
            educationPlace="Shree ganesh das Rathi vaidyalay Amravati"
            year="2015 - 2017"
            educationTitle="10th Grade"
          />
          <Card
            educationPlace="Vidyabharti Mahavidyalaya Amravati"
            year="2017 - 2019"
            educationTitle="12th Grade"
          />
          <Card
            educationPlace="KDK collage of Engineering, Nagpur"
            year="2019 - 2023"
            educationTitle="B.E.(CSE)"
          />
        </div>
      </div>
    </section>
  );
};

export default Education;

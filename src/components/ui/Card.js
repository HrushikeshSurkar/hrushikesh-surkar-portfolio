import React from "react";
import "../../styles/components/Card.css";
import { MdSchool } from "react-icons/md";

const Card = ({ year, educationTitle, educationPlace }) => {
  return (
    <div className="main-card">
      <MdSchool className="education-icon" />
      <div className="education-wrap">
        <div className="education-year">{year}</div>
        <div className="education-title">{educationTitle}</div>
        <div className="education-place">{educationPlace}</div>
      </div>
    </div>
  );
};

export default Card;

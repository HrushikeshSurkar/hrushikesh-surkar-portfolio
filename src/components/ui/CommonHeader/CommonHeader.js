import React from "react";
import "./CommonHeader.css";

const CommonHeader = ({ title, bgColorForHeader, colorForHeader }) => {
  return (
    <div
      className="common-header"
      style={{ backgroundColor: bgColorForHeader, color: colorForHeader }}
    >
      {title}
    </div>
  );
};

export default CommonHeader;

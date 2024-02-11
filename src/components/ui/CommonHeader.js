import React from "react";
import "../../styles/components/CommonHeader.css";

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

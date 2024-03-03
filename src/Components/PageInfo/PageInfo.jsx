import React from "react";
import "./PageInfo.css";

const PageInfo = ({ heading, desc }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2 className="page-heading">{heading}</h2>
      <p className="page-desc">{desc}</p>
    </div>
  );
};

export default PageInfo;

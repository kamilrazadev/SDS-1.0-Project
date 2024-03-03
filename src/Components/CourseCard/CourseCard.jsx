import React from "react";
import "./CourseCard.css";
import { Link } from "react-router-dom";

const CourseCard = ({ data }) => {
  return (
    <>
      <div className="card-client">
        <div className="logo-img">
          <img src={data.image} alt="" />
        </div>
        <p className="d-flex flex-column name-client">
          {" "}
          {data.courseName}
          <span className="inst-name">{data.instructor}</span>
          <span className="price">Price: {data.price}</span>
        </p>
        <div className="button">
          <Link to="/single-course">
            <button className="btn btn-primary-custom">Goto Course</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CourseCard;

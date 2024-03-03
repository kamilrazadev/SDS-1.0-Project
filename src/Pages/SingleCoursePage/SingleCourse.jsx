import React from "react";
import "./SingleCourse.css";
import PageInfo from "../../Components/PageInfo/PageInfo";
import { courseData } from "../../utils/data";

const SingleCourse = ({ title }) => {
  return (
    <section className="container my-5">
      <p className="course-title">Course Title</p>
      <PageInfo heading={courseData[0].courseName} />
      <div>
        <p>{courseData[0].courseContent}</p>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary-custom ">Enroll Now</button>
      </div>
    </section>
  );
};

export default SingleCourse;

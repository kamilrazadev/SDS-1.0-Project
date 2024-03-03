import React from "react";
import "./Courses.css";
import { courseData } from "../../utils/data";
import CourseCardLayout from "../../Components/CourseCardLayout/CourseCardLayout";
import PageInfo from "../../Components/PageInfo/PageInfo";

const Courses = () => {
  return (
    <section className="container my-5">
      <PageInfo
        heading="Our Courses"
        desc="These are our all courses enjoy learning by the best mentors"
      />
      <CourseCardLayout data={courseData} />
    </section>
  );
};

export default Courses;

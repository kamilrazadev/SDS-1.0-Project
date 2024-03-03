import React from "react";
import { featuredCourses } from "../../utils/data";
import CourseCardLayout from "../../Components/CourseCardLayout/CourseCardLayout";
import PageInfo from "../../Components/PageInfo/PageInfo";

const FeaturedCourses = () => {
  return (
    <section className="container my-5">
      <div className="page-info">
        <PageInfo
          heading="Featured Courses"
          desc="Following are our featured courses"
        />
      </div>
      <CourseCardLayout data={featuredCourses} />
    </section>
  );
};

export default FeaturedCourses;

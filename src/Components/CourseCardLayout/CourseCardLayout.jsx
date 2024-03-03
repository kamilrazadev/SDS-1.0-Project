import React from "react";
import CourseCard from "../CourseCard/CourseCard";
import PageInfo from "../PageInfo/PageInfo";

const CourseCardLayout = ({data}) => {

  return (
    <main className="container my-5">
      <section className="row">
        {data.map((course, key) => (
          <div className="col-lg-3 col-md-6 col-12 mt-3" key={key}>
            <CourseCard data={course} />
          </div>
        ))}
      </section>
    </main>
  );
};

export default CourseCardLayout;

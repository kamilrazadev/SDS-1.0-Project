import React, { useEffect } from "react";
import "./Home.css";
import HeroSection from "../../Components/HeroSection/HeroSection";
import FeaturedCourses from "../FeaturedCourses/FeaturedCourses";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedCourses />
    </>
  );
};

export default Home;

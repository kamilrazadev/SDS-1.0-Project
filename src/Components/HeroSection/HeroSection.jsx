import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <main className="container my-5">
      <section className="row">
        <div className="col-lg-6 col-12">
          <div className="brand-tag">
            The Best <span className="tag">#Free</span> Learning Online Resource{" "}
          </div>
          <div>
            <h1 className="mt-4">Your Gateway to Free Tech Education Online</h1>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <div>
            <p className="brand-desc">
              Empowering Minds is your gateway to free technology education.
              Explore a wealth of resources and expert-led courses, designed to
              nurture your tech skills. Join us today and start your journey
              towards tech excellence
            </p>
          </div>
          <div className="mt-4">
            <Link to="/courses">
              <button className="btn btn-secondary-custom">
                Explore Courses
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;

import React, { useEffect } from "react";
import AOS from "aos";

import logo from "../../assets/images/img-1.png";

import "./index.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="about" className="about_section">
      <div className="about_title_section">
        <h2 data-aos="zoom-in" data-aos-delay="100">
          About
        </h2>
        {/* <p className="description"> */}
        <p data-aos="zoom-in" data-aos-delay="200">
          I'm a passionate Full Stack Developer with a focus on building clean,
          modern, and responsive web applications. I have experience working
          with a variety of technologies, including React, Node.js, and Tailwind
          CSS. In my free time, I enjoy exploring new technologies, reading
          about the latest industry trends, and contributing to open source
          projects. I'm always eager to learn and grow as a developer.
        </p>
        <button
          className="btn btn_3"
          data-aos="fade-in-right"
          data-aos-delay="300"
        >
          Hire Me
        </button>
      </div>
      <div className="about_image_section">
        <img src={logo} data-aos="zoom-in" data-aos-delay="100" />
      </div>
    </section>
  );
};

export default About;

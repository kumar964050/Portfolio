import { useEffect, useRef } from "react";
import AOS from "aos";
import Typed from "typed.js";
import logo from "../../assets/images/img-1.png";

import "./index.css";

const rolesList = [
  "Full Developer",
  "Web Developer",
  "Application Developer",
  "Freelancer",
];

const Home = () => {
  const el = useRef(null); // Create a reference to store the DOM element

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: rolesList,
      typeSpeed: 50, // Speed of typing
      backSpeed: 30, // Speed of backspacing
      backDelay: 1500, // Time before backspacing
      startDelay: 500, // Time before typing starts
      loop: true, // Whether to loop the typing effect
    });

    AOS.init({ duration: 1200 });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="home_section">
      <section className="home_user_info_container">
        <div className="user_info">
          <h1 className="name" data-aos="zoom-in" data-aos-delay="100">
            Narendra Kumar
          </h1>
          <h3 className="role" data-aos="zoom-in" data-aos-delay="200">
            I'm a <span ref={el}></span>
          </h3>
          <p className="description" data-aos="zoom-in" data-aos-delay="300">
            I'm a passionate Full Stack Developer with a focus on building
            clean, modern, and responsive web applications, ensuring
            scalability, efficiency, and optimal user experience.
          </p>
          <div
            className="btn_container"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <a href="#projects" data-aos="zoom-in" data-aos-delay="500">
              <button className="btn btn_4">View Projects</button>
            </a>
            <a href="#contact-me" data-aos="zoom-in" data-aos-delay="600">
              <button className="btn btn_2">Contact Me</button>
            </a>
          </div>
        </div>
      </section>
      <section className="home_user_image_container">
        <img src={logo} data-aos="zoom-in" />
      </section>
    </section>
  );
};

export default Home;

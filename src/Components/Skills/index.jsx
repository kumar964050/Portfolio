import React, { useEffect } from "react";

import AOS from "aos";

import data from "../../assets/data";

import "./index.css";

const Skills = () => {
  const { skillsImages } = data;

  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <section id="skills" className="skills_section">
      <div className="skills_title_section">
        <h2 data-aos="zoom-in" data-aos-delay="0">
          Skills
        </h2>
        <p data-aos="zoom-in" data-aos-delay="50">
          Check my Tech Skills
        </p>
      </div>
      <ul className="skills_cards">
        {skillsImages.map((skill) => (
          <div key={skill.text} data-aos="zoom-in">
            <img src={skill.src} data-aos="zoom-in" data-aos-delay="100" />
            <small data-aos="zoom-in" data-aos-delay="300">
              {skill.text}
            </small>
          </div>
        ))}
      </ul>
    </section>
  );
};
export default Skills;

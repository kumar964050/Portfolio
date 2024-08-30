import React, { useEffect } from "react";
import AOS from "aos";
import data from "../../assets/data";

import "./index.css";

const Projects = () => {
  const { projectsData } = data;
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="projects" className="projects_section">
      <div className="projects_title_section" data-aos="zoom-in">
        <h2>Featured Projects</h2>
        <p>Check out some of my Recent works</p>
      </div>
      <div className="projects_cards_section">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="project_card"
            data-aos="zoom-in"
            data-aos-delay={`${index + 1}00`}
          >
            <div className="project_card_image_section">
              <img src={project.src} />
            </div>
            <div className="project_card_content_section">
              <h3>
                {index + 1} . {project.title}
              </h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank">
                <button className="btn btn_1">View Project</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

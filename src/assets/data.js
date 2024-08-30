// skills image
import html from "./images/skills/html.png";
import css from "./images/skills/css.png";
import js from "./images/skills/js.png";
import bootstrap from "./images/skills/bootstrap.png";

import react from "./images/skills/react-js.png";
import redux from "./images/skills/redux.png";

import node from "./images/skills/nodejs.png";
import express from "./images/skills/express-js.png";
import mongoDb from "./images/skills/mongo-db.png";
import mongoose from "./images/skills/mongoose.png";
//
import java from "./images/skills/java.png";
import springBoot from "./images/skills/spring-boot.png";

import reactNative from "./images/skills/react-native.png";

import python from "./images/skills/python.png";
import git from "./images/skills/git.png";
import github from "./images/skills/github.png";
import sqlite from "./images/skills/sqlite.png";
// need to add postman
// socket.io

// project image
import project1Src from "./images/project/project-1.png";
import project2Src from "./images/project/project-2.png";
import project3Src from "./images/project/project-3.png";
import project4Src from "./images/project/project-4.png";

const skillsImages = [
  {
    text: "React",
    src: react,
  },
  {
    text: "Redux",
    src: redux,
  },
  {
    text: "Node Js",
    src: node,
  },
  {
    text: "Express Js",
    src: express,
  },
  {
    text: "SQLite",
    src: sqlite,
  },
  {
    text: "MongoDB",
    src: mongoDb,
  },

  {
    text: "Mongoose",
    src: mongoose,
  },
  {
    text: "Java",
    src: java,
  },
  {
    text: "Spring Boot",
    src: springBoot,
  },
  {
    text: "HTML",
    src: html,
  },
  {
    text: "CSS",
    src: css,
  },
  {
    text: "BootStrap",
    src: bootstrap,
  },
  {
    text: "JS",
    src: js,
  },

  {
    text: "React Native",
    src: reactNative,
  },

  {
    text: "Git",
    src: git,
  },
  {
    text: "Github",
    src: github,
  },

  {
    text: "Python",
    src: python,
  },
];

const projectsData = [];

const project1 = {
  title: "InstaShare",
  description:
    "InstaShare—a comprehensive Instagram clone built using the MERN stack. This project is a deep dive into full-stack development, featuring a rich set of functionalities",
  link: "https://insta-share-production.up.railway.app/login",
  src: project1Src,
};
const project2 = {
  title: "Nxt Trendz",
  description:
    "Implemented Nxt Trendz application which is a clone for ECommerce applications like Amazon, Flipkart where users can login and can see list of products with search, filters, sort by, etc... ",
  link: "https://nxtnari.ccbp.tech/login",
  src: project2Src,
};
const project3 = {
  title: "Todos List",
  description:
    "A dynamic Todos List application built with HTML, CSS, and JavaScript. This project utilizes local storage for persistent data management, featuring a clean interface, task management functionalities, and a responsive design.",
  link: "https://narentodo.ccbp.tech/",
  src: project3Src,
};
const project4 = {
  title: "TIC TAC TOE Game",
  description:
    "An interactive TIC TAC TOE game built using HTML, CSS, and JavaScript. The project features smooth CSS animations, responsive design, and a user-friendly interface, showcasing a solid grasp of front-end development.",
  link: "https://nr007game.ccbp.tech/",
  src: project4Src,
};

projectsData.push(project1);
projectsData.push(project2);
projectsData.push(project4);
projectsData.push(project3);

export default {
  skillsImages,
  projectsData,
};

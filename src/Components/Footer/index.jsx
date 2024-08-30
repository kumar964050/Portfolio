import React from "react";

// asserts
import gitHub from "../../assets/images/gitHub.png";
import mail from "../../assets/images/gmail.png";
import linkedin from "../../assets/images/linkedin.png";

// styles
import "./index.css";

const linkArr = [
  {
    link: "https://github.com/kumar964050",
    src: gitHub,
  },
  {
    link: "mailto:kumar964050@gmail.com",
    src: mail,
  },
  {
    link: "https://www.linkedin.com/in/narendra-kumar-pala",
    src: linkedin,
  },
];

const Footer = () => {
  const timestamp = Date.now(); // Example timestamp (milliseconds since Unix epoch)
  const date = new Date(timestamp);
  const year = date.getFullYear();
  return (
    <footer className="footer_section">
      <div> &copy; {year} Narendra. All rights reserved</div>
      <div>
        {linkArr.map((link, index) => (
          <a key={index} href={link.link} target="_blank">
            <img src={link.src} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;

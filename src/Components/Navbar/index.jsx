import { useState } from "react";

// icons
import { IoIosMenu, IoMdClose } from "react-icons/io";
//

import "./index.css";

const linksArr = [
  { text: "Home", link: "#home" },
  { text: "About", link: "#about" },
  { text: "Skills", link: "#skills" },
  { text: "Projects", link: "#projects" },
  { text: "Contact", link: "#contact-me" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChange = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header_section">
      <a className="nav_title" href="">
        N
      </a>
      {isMenuOpen === true ? (
        <IoMdClose className="menu_icon close_icon" onClick={handleChange} />
      ) : (
        <IoIosMenu className="menu_icon" onClick={handleChange} />
      )}
      <ul
        className={`${
          isMenuOpen === true ? "menu_hide show_menu" : "menu_hide"
        }`}
      >
        {linksArr.map((tab, index) => (
          <a
            key={index}
            className="nav_links"
            href={tab.link}
            onClick={handleClose}
          >
            <li>{tab.text}</li>
          </a>
        ))}
      </ul>
    </header>
  );
};

export default Header;

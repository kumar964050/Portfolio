import { useEffect, useRef, useState } from "react";
// icons
import { IoIosArrowUp } from "react-icons/io";
// components
import NavBar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/ContactMe";
import Footer from "./Components/Footer";

// styles
import "./App.css";

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollBarRef = useRef();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  //scroll progressive bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollTop / docHeight) * 360;
      setScrollPosition(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (!scrollBarRef.current) return;
    const val = scrollPosition === 0 ? -100 : scrollPosition + 2;

    scrollBarRef.current.onclick = () => {
      if (scrollPosition > 180) {
        scrollToTop();
      } else {
        scrollToBottom();
      }
    };

    scrollBarRef.current.style.transform = `rotate(${scrollPosition / 2}deg)`;
    scrollBarRef.current.style.backgroundImage = `conic-gradient(#000 ${val}deg, #fff,#fff,#fff,#fff,#fff,#fff,#fff,#fff,#fff,#fff,#fff,#fff)`;
  }, [scrollPosition]);

  useEffect(() => {
    const setVh = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVh();
    window.addEventListener("resize", setVh);

    return () => {
      window.removeEventListener("resize", setVh);
    };
  }, []);

  return (
    <>
      <NavBar />
      <main className="container">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        {/* scroll progressive bar */}
        <span ref={scrollBarRef} className="scroll_to_top">
          <IoIosArrowUp className="arrow_icon" />
        </span>
      </main>
    </>
  );
};

export default App;

import React, { useEffect } from "react";
import AOS from "aos";

import "./index.css";

const ContactMe = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="contact-me" className="contact_section">
      <form className="contact_form" onSubmit={handleSubmit}>
        <h2 className="title" data-aos="zoom-out">
          Get in Touch
        </h2>
        <p className="desc" data-aos="zoom-in">
          I'd love hear from you! Feel free to reach out with any question or
          opportunities.
        </p>
        <div>
          <input placeholder="Name" data-aos="zoom-in" />
          <input placeholder="Email" data-aos="zoom-in" />
        </div>

        <textarea placeholder="Message..." data-aos="zoom-in" />
        <button className="btn btn_1" type="submit" data-aos="zoom-in">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactMe;

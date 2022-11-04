import React from "react";
import "./about.css";
import { FaLaptopCode, FaExclamationCircle } from "react-icons/fa";
const About = () => {
  return (
    <div className="about-container">
      <div className="about-box">
        <p>
          This is a web page based on typeracer.com for educational purposes
          only
        </p>
        <FaLaptopCode className="icon-laptop" />{" "}
        <FaExclamationCircle className="icon-alert" />
      </div>
    </div>
  );
};

export default About;

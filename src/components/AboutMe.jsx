import React from "react";
import "./AboutMe.css";
import about_logo from "../Image/AboutMe.jpg";

const AboutMe = () => {
  return (
    <div className="aboutMe" id="about">
      <div className="img-container">
        <img src={about_logo} />
      </div>

      <div className="text">
        <div className="header">
          <h3>About Me</h3>
          <h4>Sirichai Khuadkaewmanee</h4>
        </div>

        <div className="detail">
          <p>As a Junior Front-End Developer, I learned of skills in HTML,</p>
          <p>CSS, JavaScript, TypeScript, React, Redux, Vue</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

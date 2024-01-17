import React, { useEffect } from "react";
import "./Home.css";
import react_logo from "../Image/React-icon.png";
import redux_logo from "../Image/redux.png";
import html_logo from "../Image/HTML.png";
import css_logo from "../Image/css.png";
import js_logo from "../Image/Javascript.png";
import ts_logo from "../Image/Typescript.png";
import vite_logo from "../Image/Vitejs.png";
import figma_logo from "../Image/Figma.png";
import me_logo from "../Image/Home.jpg";

const AboutMe = () => {
  useEffect(() => {
    const text = "Front-End Developer";
    let speed = 150;

    let charactorID = 1;

    function writeText() {
      const textEl = document.getElementById("position");

      textEl.innerText = text.slice(0, charactorID);
      charactorID++;
      if (charactorID > text.length) {
        charactorID = 1;
      }
      setTimeout(writeText, speed);
    }
    writeText()
  }, []);

  return (
    <div className="home-container">
      <div className="img">
        <img className="img-home" src={me_logo} />
      </div>

      <div className="detail">
        <div className="text">
          <h2 id="position"></h2>
          <p>Hello My name is Sirichai. A passionate Front-End</p>
          <p>Developer based in Thailand, Bangkok</p>
        </div>

        <div className="skill">
          <img className="img-logo" src={react_logo} />
          <img className="img-logo" src={redux_logo} />
          <img className="img-logo" src={html_logo} />
          <img className="img-logo" src={css_logo} />
          <img className="img-logo" src={js_logo} />
          <img className="img-logo" src={ts_logo} />
          <img className="img-logo" src={vite_logo} />
          <img className="img-logo" src={figma_logo} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

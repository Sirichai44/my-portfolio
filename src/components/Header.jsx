import React, { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("selectedTheme") || "light"
  );

  useEffect(() => {
    localStorage.setItem("selectedTheme", mode);
    const theme = localStorage.getItem("selectedTheme");
    document.querySelector("body").setAttribute("data-theme", theme);
  }, [mode]);

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <header id="home">
      <div className="menu">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className="mode">
        <label className="theme-switch">
          <input
            type="checkbox"
            id="toggle"
            className="mode-input"
            onChange={toggleTheme}
            checked={mode === "light" ? false : true}
          />
          <div className="slider round"></div>
        </label>
      </div>
    </header>
  );
};

export default Header;

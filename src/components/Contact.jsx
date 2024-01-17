import React from "react";
import "./Contact.css";
import { BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="text-contact">
        <p>Email : mercier_1999@hotmail.com</p>
        <p>Tel : 0800649165</p>
      </div>

      <div className="btn-container">
        <a href="https://github.com/Sirichai99" target="blank">
          <BsGithub className="btn" />
        </a>

        <a href="https://www.linkedin.com/in/sirichaigino/" target="blank">
          <BsLinkedin className="btn" />
        </a>

        <a href="https://www.facebook.com/no.sirichai" target="blank">
          <BsFacebook className="btn" />
        </a>
      </div>
    </div>
  );
};

export default Contact;

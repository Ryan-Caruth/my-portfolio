import React from "react";
import { FaGithubSquare, FaLinkedin, FaEnvelopeSquare } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-left">
        <div className="logo">
          <div className="top-logo">RC</div>
          <hr />
          <div className="bottom-logo">Portfolio</div>
        </div>
        <div className="social-icons">
          <div className="github-logo">
            <FaGithubSquare />
          </div>
          <div className="linkedin-logo">
            <FaLinkedin />
          </div>
          <div className="email-logo">
            <FaEnvelopeSquare />
          </div>
        </div>
      </div>
        <nav>
          <ul className="sections">
            <li>About</li>
            <hr />
            <li>Skills</li>
            <hr />
            <li>Projects</li>
            <hr />
            <li>Contact</li>
          </ul>
        </nav>
    </div>
  );
};

export default Navbar;

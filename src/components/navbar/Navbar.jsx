import React from "react";
import { FaGithubSquare, FaLinkedin, FaEnvelopeSquare } from "react-icons/fa";
import "./navbar.css";

const Navbar = ({ aboutMe, contacts, skills, projects}) => {
  //Function to scroll to specific location on page
  const scrollToLocation = (location) => {
    location.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="nav">
      <div className="nav-left">
        <div
          className="logo"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <div className="top-logo">RC</div>
          <hr id="angled-line" />
          <div className="bottom-logo">Portfolio</div>
        </div>
        <div className="social-icons">
          <div className="github-logo">
            <FaGithubSquare
              onClick={() => {
                window.location.href = "https://github.com/Ryan-Caruth";
              }}
            />
          </div>
          <div className="linkedin-logo">
            <FaLinkedin
              onClick={() => {
                window.location.href =
                  "https://www.linkedin.com/in/ryancaruthcalgary/";
              }}
            />
          </div>
          <div className="email-logo">
            <FaEnvelopeSquare
              onClick={() => {
                window.location.href = "mailto:ryan.caruth2@gmail.com";
              }}
            />
          </div>
        </div>
      </div>
      <nav>
        <ul className="sections">
          <li
            className="headerSection"
            onClick={() => scrollToLocation(aboutMe)}
          >
            About
          </li>
          <hr />
          <li
            className="headerSection"
            onClick={() => scrollToLocation(skills)}
          >
            Skills
          </li>
          <hr />
          <li
            className="headerSection"
            onClick={() => scrollToLocation(projects)}
          >
            Projects
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

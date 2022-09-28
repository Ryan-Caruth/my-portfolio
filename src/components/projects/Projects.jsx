import React from "react";
import { forwardRef } from "react";
import "./projects.css";
import canoe from "../../assests/steve-giampa-FLC0BQtYOlI-unsplash.jpg";
import project2 from "../../assests/priscilla-du-preez-tGtWKDdicn4-unsplash.jpg";
import project3 from "../../assests/browser-tab-i-am-here-logo1.png";
import project4 from "../../assests/portfolio.png";

const Projects = forwardRef(({ projects }, ref) => {
  return (
    <div ref={projects} className="projects-container">
      <div className="header">
        <h1 className="my-projects-heading">My Projects</h1>
      </div>
      <div className="instruction-text">
        <p>(Hover over any project to learn more)</p>
      </div>
      <div className="projects">
        <div className="project-1">
          <h2>Text-Based Adventure</h2>
          <img id="firstProject" src={canoe} alt="project 1"></img>
          <p id="project1Text">
            An interactive text-based game inspired by an 11 day canoe trip I
            went onn with my family. This application used HTTP API requests and
            was created to understand browser endpoints while utilizing cURL to
            communicate data transfer.
          </p>
          <button id="project1-button"
            onClick={() =>
              (window.location.href =
                "https://github.com/Ryan-Caruth/canoe-adventure")
            }
          >
            Github
          </button>
        </div>
        <div className="project-2">
          <h2>Ecommerce farm site</h2>
          <img id="secondProject" src={project2} alt="project 2"></img>
          <p id="project2Text">
            Created an eccomerce application that focused on making it more
            accessible for Calgarians to buy Alberta grown food. This project
            involved utilizing a third party api for accessing farmstands in
            Calgary.
          </p>
          <button id="project2-button"
            onClick={() =>
              (window.location.href =
                "https://github.com/Ryan-Caruth/calgary-farmstands-ecommerce-page")
            }
          >
            Github
          </button>
        </div>
        <div className="project-3">
          <h2>I am Here</h2>
          <img id="project3" src={project3} alt="project 3"></img>
          <p id="project3Text">
            Developed an application that connects volunteers with newcomers by
            supporting their transition to life in Canada. This application
            provides many services such as transportation, accomodation,
            translation sevices and educational resources. The app includes a
            real-time chat feature and booking system
          </p>
          <button id="project3-button"
            onClick={() =>
              (window.location.href =
                "https://github.com/Ryan-Caruth/earthlings-server")
            }
          >
            Github - server
          </button>
          <button id="project3-button"
            onClick={() =>
              (window.location.href =
                "https://github.com/Ryan-Caruth/earthlings-client")
            }
          >
            Github - client
          </button>
        </div>
        <div className="portfolio">
          <h2>My Site</h2>
          <img id="project4" src={project4} alt="project 4"></img>
          <p id="project4Text">
            If you are reading this, you are on my portfolio site. Welcome! This
            site provides a brief overview of who I am as well as the projects
            that I have accomplished on my journey.
          </p>
          <button id="project4-button"
            onClick={() =>
              (window.location.href =
                "https://github.com/Ryan-Caruth/my-portfolio")
            }
          >
            Github
          </button>
        </div>
      </div>
    </div>
  );
});

export default Projects;

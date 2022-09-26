import React from "react";
import { forwardRef } from "react";
import "./projects.css";

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
        </div>
        <div className="project-2">
          <h2>Ecommerce farm site</h2>
        </div>
        <div className="project-3">
          <h2>I am Here</h2>
        </div>
        <div className="portfolio">
          <h2>My Site</h2>
        </div>
      </div>
    </div>
  );
});

export default Projects;

import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
      <div className="top-logo">RC</div>
        <hr />
        <div className="bottom-logo">Portfolio</div>
      </div>
      <div className="social-icons">icons</div>
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

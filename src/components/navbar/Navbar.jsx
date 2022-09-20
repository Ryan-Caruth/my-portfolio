import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        logo
        <span className="social-icons">icons</span>
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

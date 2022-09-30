import React from "react";
import { forwardRef } from "react";
import portfolioPicture from '../../assests/IMG_20200813_140454646_HDR.jpg'
import "./about.css";

const About = forwardRef(( { aboutMe }, ref ) => {

  return (
    <div ref={aboutMe} className="about-container">
      <h1 id="aboutMeHeader">About Me</h1>
      <div className="about-picture">
        <img id="myPicture" src={portfolioPicture} alt="My profile pic"></img>
      </div>
      <div className="text-section">
        <p>
          I am a passionate and self-motivated Full Stack Developer from
          Calgary, Alberta. I enjoy the daily problem-solving challenges of
          writing code, discovering new features and the functunality I am able
          to create. I am transitioning into tech from a customer service
          industry. Working those customer service jobs allowed me to grow as a
          person and build the much needed soft skills including empathy,
          patience and open-mindedness. I am eager to combine my previous
          background with development work
        </p>
        <br />
        <p>
          Other than coding, you can find me in the mountains either skiing or
          mountain biking.
        </p>
        <br />
        <p>
          Please feel free to contact me <a href="mailto:ryan.caruth2@gmail.com">here</a> regarding any opportunitities
        </p>
      </div>
    </div>
  );
});

export default About;

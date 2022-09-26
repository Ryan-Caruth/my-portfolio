import React from 'react'
import { forwardRef } from 'react'
import './skills.css'

const Skills = forwardRef(({ skills }, ref) => {
  return (
    <div ref={skills}>
      <h1>My Skills</h1>
      <ul>
        <li>HTML5</li>
        <li>Socket.IO</li>
        <li>Trello</li>
        <li>Git</li>
        <li>CSS3</li>
        <li>Material UI</li>
        <li>Figma</li>
        <li>VS Code</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Github</li>
        <li>MongoDB</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Python</li>
      </ul>
    </div>
  )
});

export default Skills
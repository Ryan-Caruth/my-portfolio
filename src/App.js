import { useRef } from 'react';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import LandingPage from './components/landingPage/LandingPage';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';

function App() {
  //use useRef to store locations on page
  const aboutMe = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const contacts = useRef(null);
  
  return (
    <div>
      <Navbar aboutMe={aboutMe} skills={skills} projects={projects} contacts={contacts} />
      <LandingPage />
      <About aboutMe={aboutMe} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact contacts={contacts} />
    </div>
  );
}

export default App;

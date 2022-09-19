import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import LandingPage from './components/landingPage/LandingPage';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

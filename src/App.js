import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import Projects from './components/Projects'
import Experience from './components/Experience';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Skills from './components/Skills';
import { useRef } from 'react';

function App() {
  const aboutSection = useRef(null);
  const skillsSection = useRef(null);
  const projectsSection = useRef(null);
  const experienceSection = useRef(null);
  const contactSection = useRef(null);

  return (
    <>
      <Navbar
        aboutSection={aboutSection}
        skillsSection={skillsSection}
        projectsSection={projectsSection}
        experienceSection={experienceSection}
        contactSection={contactSection}
      />
      <MainPage />
      <Skills ref={skillsSection} />
      <Projects ref={projectsSection} />
      <Experience ref={experienceSection} />
      <AboutMe ref={aboutSection} />
      <Contact ref={contactSection}  />
    </>
  );
}

export default App;

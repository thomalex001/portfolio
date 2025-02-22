import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Projects from './components/Projects'
import Experience from './components/Experience';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
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
      <main>
        <Profile />
        <Skills ref={skillsSection} />
        <Projects ref={projectsSection} />
        <Experience ref={experienceSection} />
        <AboutMe ref={aboutSection} />
        <Footer ref={contactSection} />
      </main>
    </>
  );
}

export default App;

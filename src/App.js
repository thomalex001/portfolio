import './App.scss';
import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import Projects from './components/Projects'
import Experience from './components/Experience';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <Navbar />
      <MainPage />
      <Skills/> 
      <Projects />
      <Experience />
      <AboutMe />
      <Contact />
    </>
  );
}

export default App;

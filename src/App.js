import './App.scss';
import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import Projects from './components/Projects'
import Experience from './components/Experience';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <>
      <Navbar />
      <MainPage />
      <Projects />
      <Experience />
      <AboutMe />
    </>
  );
}

export default App;

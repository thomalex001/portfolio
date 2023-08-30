import './App.scss';
import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import Projects from './components/Projects'

function App() {
  return (
    <>
      <Navbar />
      <MainPage />
      <Projects />
    </>
  );
}

export default App;

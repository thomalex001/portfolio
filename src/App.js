import './App.scss';
import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';

function App() {
  return (
    <>
      <Navbar />
      <MainPage />
    </>
  );
}

export default App;

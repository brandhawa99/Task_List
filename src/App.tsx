import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet/>
    </div>
  );
}

export default App;

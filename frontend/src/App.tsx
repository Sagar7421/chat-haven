import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './components/Lander';
import { NavBar } from './components/Navbar';
import Dashboard from './components/Dashboard';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
  </div>
  );
}

export default App;

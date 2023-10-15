import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './components/Lander';
import { NavBar } from './components/Navbar';
import Dashboard from './components/Dashboard';
import ErrorPage from './components/ErrorPage';
import { AuthInterface } from './reducers/authSlice';
import { useAppSelector } from './hooks';

function App() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  return (

    <div className="App">
        <NavBar />
        {!isLoggedIn && <LandingPage />}
        {isLoggedIn && <Dashboard />}

  </div>
  );
}

export default App;

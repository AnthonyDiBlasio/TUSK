import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import Home from './pages/Home';
import NavTab from './components/NavTab';

import Signup from './components/Signup';
import Login from './components/Login';
import ProfilePage from './pages/ProfilePage';
import './index.css'

const App = () => {
  return (
    <Router>
      <NavTab />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
      </Routes>
      <CookieConsent className='cookie-consent' debug={true}>This site uses cookies.</CookieConsent>
    </Router>
  );
};

export default App;

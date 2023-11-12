// App.js
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import Home from './pages/Home';
import NavTab from './components/NavTab';
import Signup from './components/Signup';
import Login from './components/Login';
import ProfilePage from './pages/ProfilePage';
import Sidebar from './components/sidebar';
import './index.css';
import { AuthContext } from './Authcontext';

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);


  return (
    
      <Router>
        <NavTab />
        {isLoggedIn && <Sidebar />}
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

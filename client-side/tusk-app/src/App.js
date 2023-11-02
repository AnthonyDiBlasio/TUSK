import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import Home from "./pages/Home";
import NavTab from "./components/NavTab";
import Footer from "./components/Footer";
import Signup from "./Signup";
import Login from "./Login";
import ProfilePage from "./pages/ProfilePage";
import Logout from "./Logout";

const App = () => {
  return (
    <Router>
      <NavTab />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      <Footer />
      <CookieConsent debug={true}>This site uses cookies.</CookieConsent>
    </Router>
  );
};

export default App;

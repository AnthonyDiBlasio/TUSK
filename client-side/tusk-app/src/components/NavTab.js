import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import tusklogo from '../pics/tusklogo.svg'
const NavTab = () => {
    const navigate = useNavigate();
    const loggedIn = !!localStorage.getItem('token');
  
    const handleLogout = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/users/logout');
        console.log(response.data);
  
        localStorage.removeItem('token');
        localStorage.clear();
        navigate('/');
      } catch (error) {
        console.error('Logout error:', error);
      }
    };

  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Navbar.Brand>
        <Link to="/">
          <img
            style={{ height: '80px' }}
            src={tusklogo}
            alt="logo"
            className="nav-logo"
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Nav>
          {loggedIn ? (
            <>
              <Nav.Link as={Link} to={`/profile/${localStorage.getItem('userId')}`}>
                Profile
              </Nav.Link>
              <Nav.Link onClick={() => {
             handleLogout();
                }}>
                Logout
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link as={Link} to="/signup">
                Sign Up
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </>
          )}
        </Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavTab;

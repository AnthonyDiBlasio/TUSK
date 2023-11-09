import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import axios from 'axios';
import tusklogo from '../pics/tusklogo.svg';

const NavTab = () => {
  const navigate = useNavigate();
  const loggedIn = !!localStorage.getItem('token');

  const handleLogout = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/users/logout');
      console.log(response.data);

      localStorage.removeItem('token');
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
          <img
            style={{ height: '80px' }}
            src={tusklogo}
            alt="logo"
            className="nav-logo"
          />
          </Nav.Link>
        </Nav>
        <Nav className='nav-links'>
          {loggedIn ? (
            <>
              <Nav.Link as={Link} to={`/profile/${localStorage.getItem('userId')}`}>
                Profile
              </Nav.Link>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
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
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavTab;

// NavTab.js
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import axios from 'axios';
import tusklogo from '../pics/tusklogo.svg';
import { AuthContext } from '../Authcontext';

const NavTab = () => {
  const navigate = useNavigate();
  const { isLoggedIn, updateLoginStatus } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/users/logout');
      console.log(response.data);

      localStorage.removeItem('token');
      updateLoginStatus(false);
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
    console.log('isLoggedIn in NavTab:', isLoggedIn);
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
          {isLoggedIn ? (
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

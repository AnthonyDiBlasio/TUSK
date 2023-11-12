// Login.js
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Authcontext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { updateLoginStatus } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      console.log('Attempting login...');
      const response = await axios.post('http://localhost:3001/api/users/login', { email, password });
      const { user, token } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('userId', user.id);
      updateLoginStatus(true);
      console.log('Login successful!');
      navigate(`/profile/${user.id}`);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className='container' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 'auto', marginTop: '10rem' }}>
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <h3>Tusk Login</h3>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ padding: '0.5rem', marginBottom: '1rem' }}/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" style={{ padding: '0.5rem', marginBottom: '1rem' }}/>
        <button type="button" onClick={handleLogin} style={{ padding: '0.5rem 2rem', borderRadius: '0.25rem', background: '#007bff', color: 'white' }}>Login</button>
      </form>
    </div>
  );
};

export default Login;

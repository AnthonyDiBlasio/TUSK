import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/users/login', { email, password });
      const { user, token } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('userId', user.id);
      navigate(`/profile/${user.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className='container' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 'auto', marginTop: '10rem' }}>
      <h1>User Login</h1>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
      <button type="button" onClick={handleLogin}>Login</button>
    </form>
  );
};

export default Login;

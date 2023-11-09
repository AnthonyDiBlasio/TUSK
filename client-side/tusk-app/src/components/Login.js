import React, { useState } from 'react';
import axios from 'axios';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/users/login', { email, password });
      const { user, token } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('userId', user.id);
      // Redirect to the user's specific profile page
    } catch (error) {
      console.error(error);
    }
  };

  return (
 
    <div >
    <div className='container' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 'auto', marginTop: '10rem' }}>
      <h1 style={{ marginBottom: '1rem' }}>Tusk Login</h1>
    
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: '0.5rem', marginBottom: '1rem' }}
      />
    
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: '0.5rem', marginBottom: '1rem' }}
      />
      <button style={{ padding: '0.5rem 2rem', borderRadius: '0.25rem', background: '#007bff', color: 'white' }} onClick={handleLogin}>
        Login
      </button>
    </div>
    </div>
  );
};

export default Login;




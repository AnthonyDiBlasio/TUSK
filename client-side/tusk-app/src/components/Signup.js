import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/users/signup', { username, email, password });
      console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.error(error); // Handle errors appropriately
    }
  };

  return (
    <div className='container' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 'auto', marginTop: '10rem' }}>
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ marginBottom: '1rem' }}>Tusk Signup</h3>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: '0.5rem', marginBottom: '1rem' }}
        />
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
        <button
          onClick={handleSignup}
          style={{ padding: '0.5rem 2rem', borderRadius: '0.25rem', background: '#007bff', color: 'white' }}
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;

import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
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

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/users/login', { email, password });
      console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.error(error); // Handle errors appropriately
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/users/logout');
      console.log(response.data); // Handle the response as needed
  
      // Clear the token from local storage
      localStorage.removeItem('token');
  
      // Redirect the user to the login page or update UI to reflect the logout status
      alert('You have been logged out successfully.');
      // Add any additional code for UI updates or redirection here
    } catch (error) {
      console.error(error); // Handle errors appropriately
    }
  };
  

  return (
    <div>
      <h1>User Signup</h1>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Signup</button>

      <h1>User Login</h1>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>

      <h1>User Logout</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default App;


import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

const ProfilePage = () => {
  const [user, setUser] = useState({});
 
  const userId = localStorage.getItem('userId'); // Retrieve the user ID from local storage

  const fetchUserProjects = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/users/${userId}`);
      setUser(response.data);
   
    } catch (error) {
      console.error(error);
    }
  }, [userId]);

  useEffect(() => {
    fetchUserProjects();
  }, [fetchUserProjects]);

  return (
    <div className='container'>
      <h2>Profile Page</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <h3>Projects:</h3>
    
    </div>
  );
};

export default ProfilePage;

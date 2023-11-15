import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';


const ProfilePage = () => {
  const [user, setUser] = useState({});

  const userId = localStorage.getItem('userId');

  const fetchUser = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/users/profile/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [userId]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <>
      <div className='container'>
        <h2>Profile Page</h2>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>

        <h3>Projects:</h3>
        {user.Projects && user.Projects.length > 0 ? (
          <ul>
            {user.Projects.map((project) => (
              <li key={project.id}>{project.name}</li>
            ))}
          </ul>
        ) : (
          <p>No projects found.</p>
        )}

        <h3>Tasks:</h3>
        {user.Tasks && user.Tasks.length > 0 ? (
          <ul>
            {user.Tasks.map((task) => (
              <li key={task.id}>{task.name}</li>
            ))}
          </ul>
        ) : (
          <p>No tasks found.</p>
        )}
      </div>
    </>
  );
};


export default ProfilePage;

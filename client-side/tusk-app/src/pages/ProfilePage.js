import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

const ProfilePage = () => {
  const [user, setUser] = useState({});
  const [projects, setProjects] = useState([]);
  const userId = localStorage.getItem('userId'); // Retrieve the user ID from local storage

  const fetchUserProjects = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/users/${userId}`);
      setUser(response.data);
      setProjects(response.data.Projects);
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
      <ul>
        {projects &&
          projects.map((project) => (
            <li key={project.id}>
              <p>Name: {project.name}</p>
              <p>Description: {project.description}</p>
              <h4>Tasks:</h4>
              <ul>
                {project.Tasks &&
                  project.Tasks.map((task) => (
                    <li key={task.id}>
                      <p>Task Name: {task.name}</p>
                      <p>Task Description: {task.description}</p>
                      <p>Due Date: {task.due_date}</p>
                      <p>Status: {task.status}</p>
                    </li>
                  ))}
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ProfilePage;

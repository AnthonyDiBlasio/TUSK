import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreateProject = () => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [taskName, setTaskName] = useState('');
  const [memberEmail, setMemberEmail] = useState('');
  const [members, setMembers] = useState([]);
  const [createdProject, setCreatedProject] = useState(null);

  useEffect(() => {
    // Fetch existing members or user data to populate the members list
    axios.get('http://localhost:3001/api/users').then((response) => {
      setMembers(response.data);
    });
  }, []);

  const handleAddTask = () => {
    // Implement logic to add a task to the project
    console.log('Task added:', taskName);
  };

  const handleAddMember = () => {
    // Implement logic to add a member to the project
    console.log('Member added:', memberEmail);
  };

  const handleCreateProject = () => {
    // Implement logic to create a new project
    axios
      .post(
        'http://localhost:3001/api/projects',
        {
          name: projectName,
          description: projectDescription,
          tasks: [], // You can add tasks here if needed
          members: [], // You can add members here if needed
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then((response) => {
        setCreatedProject(response.data);
      })
      .catch((error) => {
        console.error('Error creating project:', error);
      });
  };

  return (
    <div className="container">
      <h2>Create Project</h2>

      <label>Project Name:</label>
      <input type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)} />

      <label>Project Description:</label>
      <textarea
        value={projectDescription}
        onChange={(e) => setProjectDescription(e.target.value)}
      />

      <button onClick={handleCreateProject}>Create Project</button>

      {createdProject && (
        <div>
          <h3>Project Created Successfully!</h3>
          <p>Name: {createdProject.name}</p>
          <p>Description: {createdProject.description}</p>
        </div>
      )}

      <hr />

      <h3>Add Task</h3>
      <label>Task Name:</label>
      <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
      <button onClick={handleAddTask}>Add Task</button>

      <hr />

      <h3>Add Member</h3>
      <label>Member Email:</label>
      <select value={memberEmail} onChange={(e) => setMemberEmail(e.target.value)}>
        <option value="" disabled>
          Select a member
        </option>
        {members.map((member) => (
          <option key={member.id} value={member.email}>
            {member.email}
          </option>
        ))}
      </select>
      <button onClick={handleAddMember}>Add Member</button>
    </div>
  );
};

export default CreateProject;

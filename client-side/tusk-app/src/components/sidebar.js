import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isProjectOpen, setProjectOpen] = useState(false);
  const [isTaskOpen, setTaskOpen] = useState(false);

  const toggleProject = () => {
    setProjectOpen(!isProjectOpen);
    setTaskOpen(false);
  };

  const toggleTask = () => {
    setTaskOpen(!isTaskOpen);
    setProjectOpen(false);
  };

  return (
    <div className="sidebar">
      <div className="dropdown">
        <h2 onClick={toggleProject}>Project Management</h2>
        {isProjectOpen && (
          <ul>
            <li>
              <Link to="/create-project">Create Project</Link>
            </li>
            <li>
              <Link to="/update-project">Update Project</Link>
            </li>
            <li>
              <Link to="/delete-project">Delete Project</Link>
            </li>
            <li>
              <Link to="/add-team-members">Add Team Members</Link>
            </li>
          </ul>
        )}
      </div>
      <div className="dropdown">
        <h2 onClick={toggleTask}>Task Management</h2>
        {isTaskOpen && (
          <ul>
            <li>
              <Link to="/create-task">Create Task</Link>
            </li>
            <li>
              <Link to="/update-task">Update Task</Link>
            </li>
            <li>
              <Link to="/delete-task">Delete Task</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

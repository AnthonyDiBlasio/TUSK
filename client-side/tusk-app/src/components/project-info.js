import React from 'react';

const ProjectInfo = ({ project }) => {
  return (
    <div>
      <h3>Project: {project.name}</h3>
      <p>Description: {project.description}</p>

      <h4>Tasks:</h4>
      {project.Tasks && project.Tasks.length > 0 ? (
        <ul>
          {project.Tasks.map((task) => (
            <li key={task.id}>{task.name}</li>
          ))}
        </ul>
      ) : (
        <p>No tasks found for this project.</p>
      )}
    </div>
  );
};

export default ProjectInfo;

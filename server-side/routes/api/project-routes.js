const express = require('express');
const { User, Project, Task } = require('../../models/index');

const router = express.Router();

// Get all projects with associated user and tasks
router.get('/', async (req, res) => {
  try {
    const projects = await Project.findAll({
      include: [
        {
          model: User,
        },
        Task,
      ],
    });
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// Create a new project with associated user and tasks
router.post('/projects', async (req, res) => {
  try {
    const { name, description, user_id, tasks } = req.body;
    const project = await Project.create(
      {
        name: name,
        description:description,
        userId: user_id,
        tasks: tasks, // Assuming tasks is an array of task objects
      },
      {
        include: [User, Task],
      }
    );
    res.json(project);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// Update a project's information
router.put('/projects/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const project = await Project.findByPk(id);
    if (project) {
      project.name = name;
      project.description = description;
      await project.save();
      res.json(project);
    } else {
      res.status(404).send('Project not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// Delete a project
router.delete('/projects/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByPk(id);
    if (project) {
      await project.destroy();
      res.send('Project deleted successfully');
    } else {
      res.status(404).send('Project not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

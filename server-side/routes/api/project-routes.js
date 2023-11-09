const express = require('express');
const { User, Project, Task, UserProject} = require('../../models/index');

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
router.get('/:id', async (req, res) => {
  try {
    const projectId = req.params.id;
    const project = await Project.findByPk(projectId);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});


// Create a new project with associated user and tasks
router.post('/', async (req, res) => {
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
router.put('/:id', async (req, res) => {
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
router.delete('/:id', async (req, res) => {
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

// Add a user to a project
router.post('/:projectId/addUser', async (req, res) => {
  const { projectId } = req.params;
  const { userId } = req.body;

  try {
    const project = await Project.findByPk(projectId);
    const user = await User.findByPk(userId);

    if (!project || !user) {
      return res.status(404).json({ message: 'Project or user not found.' });
    }

    await project.addUser(user);
    res.json({ message: 'User added to project successfully.' });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});
// Add a user to a project by email
router.post('/:projectId/addUser', async (req, res) => {
  const { projectId } = req.params;
  const { email } = req.body;

  try {
    const project = await Project.findByPk(projectId);
    const user = await User.findOne({ where: { email } });

    if (!project || !user) {
      return res.status(404).json({ message: 'Project or user not found.' });
    }

    await project.addUser(user);
    res.json({ message: 'User added to project successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});




module.exports = router;

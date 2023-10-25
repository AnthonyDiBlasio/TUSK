const express = require('express');
const { User, Project, Task } = require('../../models/index');

const router = express.Router();

// Get all users with associated projects and tasks
router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll({
      include: [
        {
          model: Project,
          include: [Task],
        },
        Task,
      ],
    });
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// Create a new user with associated projects and tasks
router.post('/users', async (req, res) => {
  try {
    const { username, email, password_hash, projects, tasks } = req.body;
    const user = await User.create(
      {
        username: username,
        email: email,
        password_hash: password_hash,
        Projects: projects, 
        Tasks: tasks, 
      },
      {
        include: [Project, Task],
      }
    );
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// Update a user's information
router.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email, password_hash } = req.body;
    const user = await User.findByPk(id);
    if (user) {
      user.username = username;
      user.email = email;
      user.password_hash = password_hash;
      await user.save();
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// Delete a user
router.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
      res.send('User deleted successfully');
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

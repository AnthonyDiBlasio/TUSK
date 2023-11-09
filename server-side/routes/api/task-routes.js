const express = require('express');
const { User, Project, Task, UserProject } = require('../../models/index');

const router = express.Router();

// Get all tasks with associated user and project
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.findAll({
      include: [
        {
          model: User,
        },
        Project,
      ],
    });
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});
router.get('/:id', async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findByPk(taskId);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});


// Create a new task with associated user and project
router.post('/', async (req, res) => {
  try {
    const { name, description, user_id, project_id, due_date, status } = req.body;
    const task = await Task.create(
      {
        name: name,
        description: description,
        user_id: user_id,
        project_id: project_id,
        due_date: due_date,
        status: status,
      }
    );
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// Update a task's information
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, due_date, status } = req.body;
    const task = await Task.findByPk(id);
    if (task) {
      task.name = name;
      task.description = description;
      task.due_date = due_date;
      task.status = status;
      await task.save();
      res.json(task);
    } else {
      res.status(404).send('Task not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// Delete a task
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    if (task) {
      await task.destroy();
      res.send('Task deleted successfully');
    } else {
      res.status(404).send('Task not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});
// Assign a task to project members
router.post('/projects/:projectId/tasks/:taskId/assignMembers', async (req, res) => {
  const { projectId, taskId } = req.params;
  const { userIds } = req.body;

  try {
    const project = await Project.findByPk(projectId);
    const task = await Task.findByPk(taskId);

    if (!project || !task) {
      return res.status(404).json({ message: 'Project or task not found.' });
    }

    const users = await User.findAll({ where: { id: userIds } });

    if (users.length === 0) {
      return res.status(404).json({ message: 'No users found with the provided IDs.' });
    }

    await task.setProject(project);
    await task.setUsers(users);

    res.json({ message: 'Task assigned to project members successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

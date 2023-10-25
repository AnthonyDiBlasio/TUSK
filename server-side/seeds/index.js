const { User, Project, Task,} = require('../models/index');
const sequelize = require('../config/connection');

const seedDatabase = async () => {
  try {
    // Seed users
    const users = await User.bulkCreate([
      { username: 'user1', email: 'user1@example.com', password_hash: 'password1' },
      { username: 'user2', email: 'user2@example.com', password_hash: 'password2' },
    ]);

    // Seed projects
    const projects = await Project.bulkCreate([
      { name: 'Project 1', description: 'Description for Project 1', user_id: users[0].id },
      { name: 'Project 2', description: 'Description for Project 2', user_id: users[1].id },
    ]);

    // Seed tasks
    await Task.bulkCreate([
      { name: 'Task 1', description: 'Description for Task 1', user_id: users[0].id, project_id: projects[0].id, due_date: new Date(), status: 'In Progress' },
      { name: 'Task 2', description: 'Description for Task 2', user_id: users[1].id, project_id: projects[1].id, due_date: new Date(), status: 'Completed' },
    ]);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Close the database connection
    await sequelize.close();
  }
};

// Call the seed function
seedDatabase();

const Project = require('./project');
const Task = require('./task');
const User = require('./user');

//* User model relationships*//
User.hasMany(Project, { foreignKey: 'user_id' });
User.hasMany(Task, { foreignKey: 'user_id' });

//* Project model relationships*//
Project.belongsTo(User, { foreignKey: 'user_id' });
Project.hasMany(Task, { foreignKey: 'project_id' }); 

//* Task model relationships *//
Task.belongsTo(User, { foreignKey: 'user_id' });
Task.belongsTo(Project, { foreignKey: 'project_id' });

module.exports = { User, Project, Task };

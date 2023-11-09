const Project = require('./project');
const Task = require('./task');
const User = require('./user');


//* User model relationships*//
User.belongsToMany(Project, { through: 'UserProject', foreignKey: 'user_id' });
Project.belongsToMany(User, { through: 'UserProject', foreignKey: 'project_id' });
User.hasMany(Task, { foreignKey: 'user_id' });
Task.belongsTo(User, { foreignKey: 'user_id' });
Project.hasMany(Task, { foreignKey: 'project_id' });
Task.belongsTo(Project, { foreignKey: 'project_id' });

module.exports = { User, Project, Task };

const project = require('./project');
const task = require('./task');
const user = require('./user');

//* User model relationships*//
user.hasMany(project);
user.hasMany(task);

//* Project model relationships*//
project.belongsTo(user);
project.hasMany(task);

//* Task model relationships *//
task.belongsTo(user);
task.belongsTo(project);
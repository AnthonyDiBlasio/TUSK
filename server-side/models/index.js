const project = require('./project');
const task = require('./task');
const user = require('./user');

//* User model relationships*//
user.hasMany(project, {foreignKey:'user_id'});
user.hasMany(task, {foreignKey:'user_id'});


//* Project model relationships*//
project.belongsTo(user, {foreignKey:'user_id'});
project.hasMany(task), {foreignKey:'project_id'};

//* Task model relationships *//
task.belongsTo(user, {foreignKey:'user_id'});
task.belongsTo(project, {foreignKey:'project_id'});

module.exports = {user,project,task};
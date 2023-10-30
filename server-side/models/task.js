const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../config/connection');

class Task extends Model {}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    due_date: {
      type: DataTypes.DATE,
    },
    status: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize: db,
    modelName: 'Task',
    tableName: 'tasks',
    timestamps: false,
  }
);

module.exports = Task;
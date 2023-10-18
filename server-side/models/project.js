const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../config/connection');

class Project extends Model {}

Project.init(
  {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  },
  {
    sequelize: db,
    modelName: 'Project',
    tableName: 'projects',
    timestamps: false,
  }
);


const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../config/connection');

class UserProject extends Model {
  
}

UserProject.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'UserProject',
    tableName: 'user_projects',
    timestamps: false,
  }
);

module.exports = UserProject;

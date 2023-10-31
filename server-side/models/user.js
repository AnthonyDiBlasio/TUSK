const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../config/connection');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const saltRounds = 10; // Define the saltRounds for bcrypt

const secret = 'mysecretsshhhhh';
const expiration = '2h';

class User extends Model {
  async generateToken() {
    const payload = {
      id: this.id,
      username: this.username,
      email: this.email,
    };
    return jwt.sign(payload, secret, { expiresIn: expiration });
  }

  static async generateHash(password) {
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  }

  async validatePassword(password) {
    return await bcrypt.compare(password, this.password_hash);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    password: {
      type: DataTypes.VIRTUAL,
      allowNull: false,
      set(value) {
        this.setDataValue('password', value);
        this.setDataValue('password_hash', bcrypt.hashSync(value, 10));
      },
    },
    password_hash: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize: db,
    modelName: 'User',
    tableName: 'users',
    timestamps: false,
  }
);

module.exports = User;

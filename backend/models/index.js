require('dotenv').config(); // para cargar variables de .env

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
  }
);

const Post = require('./post')(sequelize, DataTypes);

module.exports = {
  sequelize,
  Post,
};

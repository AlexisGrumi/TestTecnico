const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postsDb', 'postgres', '123456', {
  host: 'localhost',
  dialect: 'postgres',
});

const Post = require('./post')(sequelize, DataTypes);

module.exports = {
  sequelize,
  Post,
};

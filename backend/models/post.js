module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('post', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    underscored: true
  });
  return Post;
};

const { Post } = require('../models');

exports.getAllPosts = async (req, res) => {
  const posts = await Post.findAll();
  res.json(posts);
};

exports.createPost = async (req, res) => {
  const { name, description } = req.body;
  const post = await Post.create({ name, description });
  res.status(201).json(post);
};

exports.deletePost = async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }
  await post.destroy();
  res.json(post);
};

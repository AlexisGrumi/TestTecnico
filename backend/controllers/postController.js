const { Post } = require('../models');

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    res.status(300).json({ message: `Error - ${error.message}` })
  }
};

exports.createPost = async (req, res) => {
  try {
    const { name, description } = req.body;
    const post = await Post.create({ name, description });
    res.status(201).json(post);
  } catch (error) {
    res.status(300).json({ message: `Error - ${error.message}` })
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    await post.destroy();
    res.json(post);
  } catch (error) {
    res.status(300).json({ message: `Error - ${error.message}` })
  }

};

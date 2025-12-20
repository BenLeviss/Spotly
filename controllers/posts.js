const Post = require("../models/post");

// 1. Add a New Post
const createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).send(post);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { createPost };

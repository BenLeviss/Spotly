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

// 3. Get Post by ID
const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post) res.send(post);
    else res.status(404).send("Post not found");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
module.exports = { createPost, getPostById };

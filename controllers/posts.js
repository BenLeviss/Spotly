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

// 2. Get All Posts
const getAllPosts = async (req, res) => {
  try {
    const filter = req.query.sender ? { sender: req.query.sender } : {};
    const posts = await Post.find(filter);
    res.send(posts);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { createPost, getAllPosts };

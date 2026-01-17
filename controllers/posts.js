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

// 2. Get All Posts / By sender
const getPosts = async (req, res) => {
  try {
    const filter = req.query.sender ? { username: req.query.sender } : {};
    const posts = await Post.find(filter);
    res.send(posts);
  } catch (error) {
    res.status(500).send(error.message);
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

// 4. Update a Post
const updatePostById = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }, // return the updated document
    );

    if (updatedPost) {
      res.send(updatedPost);
    } else {
      res.status(404).send("Post not found");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deletePostById = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);

    if (post) {
      res.send({ message: "Post deleted successfully", post });
    } else {
      res.status(404).send("Post not found");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
  updatePostById,
  deletePostById,
};

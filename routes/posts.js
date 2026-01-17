const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts");

// 1. Add a New Post
router.post("/", postsController.createPost);

// 2. Get All Posts
router.get("/", postsController.getAllPosts);

// 3. Get a Post by ID
// router.get("/:id", postsController.getPostById);

// 5. Update a Post
// router.put("/:id", postsController.updatePost);

module.exports = router;

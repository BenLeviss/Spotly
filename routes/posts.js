const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts");

// 1. Add a New Post
router.post("/", postsController.createPost);

// 2. Posts All Posts / By sender
router.get("/", postsController.getPosts);

// 3. Get a Post by ID
router.get("/:id", postsController.getPostById);

// 4. Update a Post
router.put("/:id", postsController.updatePostById);

// 5. Delete a Post by ID
router.delete("/:id", postsController.deletePostById);

module.exports = router;

const express = require("express");
const postRouter = express.Router();
const postsController = require("../controllers/posts");

// 1. Add a New Post
postRouter.post("/", postsController.createPost);

// 2. Posts All Posts / By sender
postRouter.get("/", postsController.getPosts);

// 3. Get a Post by ID
postRouter.get("/:id", postsController.getPostById);

// 4. Update a Post
postRouter.put("/:id", postsController.updatePostById);

// 5. Delete a Post by ID
postRouter.delete("/:id", postsController.deletePostById);

module.exports = postRouter;

const express = require("express");
const commentRouter = express.Router();
const commentController = require("../controllers/comment");

commentRouter.get("/", commentController.getAllComments);
commentRouter.get("/:commentId", commentController.getCommentById);

module.exports = commentRouter; 
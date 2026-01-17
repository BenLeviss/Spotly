const express = require("express");
const commentRouter = express.Router();
const commentController = require("../controllers/comment");

commentRouter.get("/", commentController.getAllComments);
commentRouter.get("/:commentId", commentController.getCommentById);
commentRouter.put("/:commentId", commentController.updateCommentById);
commentRouter.delete("/:commentId", commentController.deleteCommentById);

module.exports = commentRouter; 
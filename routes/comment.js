const express = require("express");
const commentController = require("../controllers/comment");
const commentRouter = express.Router();

commentRouter.post("/", (res, req) => {
    commentController.addComment(res, req)
});

module.exports = commentRouter; 
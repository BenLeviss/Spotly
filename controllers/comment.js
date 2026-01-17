const Comment = require ("../models/comment");
const Post = require ("../models/post");

const createComment = async (req, res) => {
    try {
        const { postId } = req.params;
        const { userName, content } = req.body;
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ error: "Post not found" });
        }
        const comment = await Comment.create({
            postId,
            userName,
             content 
            });
        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const getCommentsByPost = async (req, res) => {
    try {
        const { postId } = req.params;
        const comments = await Comment.find({postId})
        res.json(comments);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find({})
        res.json(comments);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const getCommentById = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.commentId)
        if (!comment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json(comment);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    createComment,
    getCommentsByPost,
    getAllComments,
    getCommentById
}
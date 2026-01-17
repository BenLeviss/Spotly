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


module.exports = {
    createComment,
    getCommentsByPost
}
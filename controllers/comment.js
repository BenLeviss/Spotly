const Comment = require ("../models/comment");
const Post = require ("../models/post");

const createComment = async (res, req) => {
    try {
        const postId = req.params;
        const { userName, content } = req.body;
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ error: "Post not found" });
        }
        const response = await Comment.create( postId, userName, content)
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    createComment
}
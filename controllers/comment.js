const Comment = require ("../models/comment")

const addComment = async (res, req) => {
    try {
        const newComment = req.body;
        const response = await Comment.create(newComment)
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    addComment
}
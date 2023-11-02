import Comment from "../models/comment.model.js";
import Post from "../models/post.model.js";
import { errorHandler } from "../utils/error.js";
export const createComment = async (req, res, next) => {
  try {
    let post;
    post = await Post.findById(req.params.id).populate("comment");

    const newComment = await Comment.create({
      comment: req.body.comment,
      user: req.user.id,
      post: req.params.id,
    });
    post.comment.push(newComment._id);
    post.save();

    return res.status(200).json(newComment);
  } catch (error) {
    next(error);
  }
};

export const deleteComment = async (req, res, next) => {
   

  let comment = await Comment.findById(req.params.id);
  let post = await Post.findById(comment.post.toString()).populate("comment");
  if (!comment) {
    return next(errorHandler(404, "Comment not found"));
  }
  if (comment.user.toString() !== req.user.id) {
    return next(errorHandler(401, "You can only delete Your own Comment"));
  }
  try {
    post.comment.pull(comment._id)
    post.save()
    await comment.deleteOne()

    res.status(200).json('Comment Deleted Succesfully')
  } catch (error) {
    next(error);
  }
};

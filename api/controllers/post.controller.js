import Post from "../models/post.model.js";

export const createPost = async(req, res) => {
  try {
    console.log(req.user)
    const post = await Post.create(req.body)
    return res.status(200).json(post)
  } catch (error) {
    next(error)
  }
};

export const deletePost = () => {};

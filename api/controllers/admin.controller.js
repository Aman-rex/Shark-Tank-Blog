import Blog from "../models/blog.model.js";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";

export const createBlog = async (req, res, next) => {
  const user = await User.findById(req.user.id);
  if (user.role !== "Admin")
    return next(errorHandler(401, "Only Admin can create an blog"));
  try {
    const blog = await Blog.create(req.body);
    return res.status(200).json(blog);
  } catch (error) {
    next(error);
  }
};

export const deleteBlog = async (req, res, next) => {
  const user = await User.findById(req.user.id);
  if (user.role !== "Admin")
    return next(errorHandler(401, "Only Admin can Delete an blog"));
  const blog = await Blog.findById(req.params.id);
  if (!blog) return next(errorHandler(404, "Post Not Found"));

  if (req.user.id !== blog.user.toString())
    return next(errorHandler(401, "Only you can delete you own created blog"));
  try {
    await blog.deleteOne();
    return res.status(200).json("Blog Deleted Succesfully");
  } catch (error) {
    next(error);
  }
};

export const updateBlog = async (req, res, next) => {
  const user = await User.findById(req.user.id);
  if (user.role !== "Admin")
    return next(errorHandler(401, "Only Admin can Update an blog"));
  const blog = await Blog.findById(req.params.id);
  if (!blog) return next(errorHandler(404, "Post Not Found"));
  if (req.user.id !== blog.user.toString())
  return next(errorHandler(401, "Only you can delete you own created blog"));
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json(updatedBlog)
  } catch (error) {
    next(error);
  }
};

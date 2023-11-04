import Blog from "../models/blog.model.js"
export const getblogs=async(req,res,next)=>{
    const blogs = await Blog.find()
    return res.status(200).json(blogs)
}
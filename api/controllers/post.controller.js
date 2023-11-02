import Post from "../models/post.model.js";
import { errorHandler } from "../utils/error.js";
import Like from "../models/likes.model.js";
export const createPost = async(req, res,next) => {
  try {

    const post = await Post.create(req.body)
    return res.status(200).json(post)
  } catch (error) {
    next(error)
  }
};

export const deletePost = async(req,res,next) => {

  const post=await Post.findById(req.params.id)
  if(!post){
    return next(errorHandler(404,'Post not Found'))
  }
  if(req.user.id !== post.user.toString() ){
    return next(errorHandler(401,'You can only delete your own Post'))
  }
  try{
    
    await Like.deleteMany({likeable:post._id})
    await post.deleteOne()
    return res.status(200).json('Post deleted Suceesfully')

  }catch(error){
    next(error)
  }


};

import Like from "../models/likes.model.js";
import Post from "../models/post.model.js";

export const like=async(req,res,next)=>{
    try{
        let likeable
        likeable = await Post.findById(req.params.id).populate('likes')

        let existingLike = await Like.findOne({
            user:req.user.id,
            likeable:req.params.id
        })

        if(existingLike){
            likeable.likes.pull(existingLike._id)
            await likeable.save()
            await existingLike.deleteOne()

        }else{
            let newLike = await Like.create({
                user:req.user.id,
                likeable:req.params.id
            })
            likeable.likes.push(newLike._id)
            likeable.save()
        }
        res.status(200).json('Request Succesfull')

    }catch(error){
        next(error)
    }
}
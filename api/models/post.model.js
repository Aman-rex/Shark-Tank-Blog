import mongoose from "mongoose";

const Schema =mongoose.Schema;

const postSchema = new Schema(
    {
        content:{
            type:String,
            required:true
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        },
        likes:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Like'
        }],
        comment:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Comment'
        }]
    },{
        timestamps:true
    }
)

const Post = mongoose.model('Post',postSchema)
export default Post
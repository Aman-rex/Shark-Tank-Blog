import mongoose from "mongoose";

const Schema = mongoose.Schema

const commentSchema = new Schema({
    comment:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
    }
},{
    timestamps:true
})

const Comment = mongoose.model('Comment',commentSchema)

export default Comment
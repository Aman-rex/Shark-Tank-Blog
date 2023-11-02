import mongoose from "mongoose"

const Schema=mongoose.Schema

const likeSchema=new Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        required:true
    },
    likeable:{
        type:mongoose.Schema.ObjectId,
        required:true
    }
},{
    timestamps:true
})

const Like= mongoose.model('Like',likeSchema)

export default Like
import mongoose from "mongoose";

const Schema=mongoose.Schema

const userSchema = new Schema({
    name:{type:string,required:true},
    email:{type:string,required:true,unique:true},
    password:{type:string,required:true},
    role:{type:string,default:'User'}
},{timestamps:true})


const User = mongoose.model('User',userSchema)
export default User
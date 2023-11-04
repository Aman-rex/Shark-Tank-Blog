import mongoose from "mongoose";

const Schema=mongoose.Schema

const blogSchema=new Schema({
    companyName:{
        type:String,
        required:true
    },
    aboutCompany:{
        type:String,
        required:true
    },
    companyFounder:{
        type:String,
        required:true
    },
    heading:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }


})
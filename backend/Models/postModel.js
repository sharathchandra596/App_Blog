import mongoose from "mongoose";

const postSchema =  new mongoose.Schema({
    title:{
        type:String,
        required:true,
       
    },
    desc:{
        type:String,
        required:true,
       
    },
    file:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
},{timestamps:true})

export const Post = mongoose.model("Post",postSchema)

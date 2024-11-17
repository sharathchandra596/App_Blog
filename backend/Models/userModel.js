import mongoose from "mongoose";

const userSchema =  new mongoose.Schema({
    username:{
        type:String,
        required:true,
        Unique:[true,"choose another username"],
    },
    email:{
        type:String,
        required:true,
        Unique:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

export const User = mongoose.model("User",userSchema)

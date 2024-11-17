import mongoose from "mongoose"

import dotenv from "dotenv";
dotenv.config();
export const connectDB= async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL,{
            dbName:"Blog_App-2"
        })

        console.log("db connected")

    } catch (error) {
        console.log(error)
    }
}
import mongoose from "mongoose"

import dotenv from "dotenv";
dotenv.config();
export const connectDB= async()=>{
    try {
        await mongoose.connect("mongodb+srv://sharathjoshi596:sharathjoshi596@cluster0.hpq1v.mongodb.net/?retryWrites=true",{
            dbName:"Blog_App-2"
        })

        console.log("db connected")

    } catch (error) {
        console.log(error)
    }
}
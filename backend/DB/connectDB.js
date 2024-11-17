import mongoose from "mongoose"
export const connectDB= async()=>{
    try {
        await mongoose.connect(MONGO_URL,{
            dbName:"Blog_App-2"
        })

        console.log("db connected")

    } catch (error) {
        console.log(error)
    }
}
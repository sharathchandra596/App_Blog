import express from 'express'
import mongoose from 'mongoose'
import dotenv, { config } from 'dotenv';
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { connectDB } from './DB/connectDB.js'
import userRoute from './routes/userRoute.js'
import postRouter from './routes/postRouter.js'
import { errorMiddleware } from './middlewares/errorMiddleware.js'
const app = express()
dotenv.config()
app.use(express.json())
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
}))
app.use(cookieParser())
app.use(express.static("public"))

app.listen(process.env.PORT, () => {
    connectDB()
    console.log(`Server is running on port ${process.env.PORT}`)
})

app.use("/api/user",userRoute)
app.use("/api/post",postRouter)




// error middelware

app.use(errorMiddleware)
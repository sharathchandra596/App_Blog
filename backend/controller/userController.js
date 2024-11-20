import ErrorHandler from "../middlewares/errorMiddleware.js"
import { User } from "../Models/userModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


export const register = async (req, res,next) => {
    try {
        const { username, email, password } = req.body

        if(!username || !email || !password){
           return next(new ErrorHandler(400,"Please fill all the fields"))
        }
       const check_user = await User.findOne({email})

       if(check_user){
        return next(new ErrorHandler(400,"User already exists"))
       }
       const hashedpassword= await bcrypt.hash(password,10)
     
        const user = await User.create({
            username,
            email,
            password:hashedpassword
        })
       
        res.status(201).json({
            success:true,
            user
        })


    } catch (error) {
        console.log("error in register controller")
        console.log(error)
    }
}


export const login= async (req, res, next)=>{

    try {
        const {email, password}= req.body

        if(!email || !password){
            return next(new ErrorHandler(400,"Please fill all the fields"))
        }

        const isUser= await User.findOne({email})
        if(!isUser){
            return next( new ErrorHandler(400, "Invalid email or password"))
        }
        
        const ismatch= await bcrypt.compare(password,isUser.password)

        if(!ismatch){
            return next(new ErrorHandler(400,"Invalid email or password"))
        }
    
        const token = jwt.sign({email: isUser.email,username:isUser.username},process.env.JWT_SECRET,{expiresIn:"1d"})

        res.cookie("token",token,{
            httpOnly: true,  // makes the cookie inaccessible to JavaScript (important for security)
            secure: true ,// true in production, false in development
            // sameSite: "Strict", // Adjust according to your needs
            maxAge: 24 * 60 * 60 * 1000, // optional: set cookie expiration (1 day)
        }).json({
            success:true,
            user:isUser
        })

        res.status(201)


    } catch (error) {
        console.log("error in login controller")
        console.log(error)
    }

}

export const logout =async (req,res,next)=>{
    try {
        
        res.clearCookie("token").json({
            success:true,
            message:"logout successfully"
        })
    } catch (error) {
        
    }
}


export const loginUser= async (req, res, next)=>{
    const username= req.username
    const email= req.email
    res.status(200).json({
        success:true,
        username,
        email
    }) 
}
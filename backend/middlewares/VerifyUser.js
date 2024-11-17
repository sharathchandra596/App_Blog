import jwt from "jsonwebtoken"
import ErrorHandler from "./errorMiddleware.js"

export const verifyUser = (req, res, next) => {
    
    try {
        const token= req.cookies.token

    if(!token)
    {
        return next(new ErrorHandler(400,"user not loged in"))
    }

    const decodedToken= jwt.verify(token,"jwt-secret")
    req.username= decodedToken.username
    req.email= decodedToken.email
    next()

    } catch (error) {
        console.log(error)
        console.log("error in verify user middleware")
    }
    
}
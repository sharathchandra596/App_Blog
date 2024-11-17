
class ErrorHandler extends Error {
    constructor(statusCode,message){
        super(message);
        this.statusCode = statusCode;
    }
}


export const errorMiddleware=(err,req,res,next)=>{
    const statusCode=err.statusCode || 500
    const message= err.message || "Internal Server Error"

    res.status(statusCode).json({
        success:false,
        message
    })
}

export default ErrorHandler;
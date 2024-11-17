import ErrorHandler from "../middlewares/errorMiddleware.js"
import { Post } from "../Models/postModel.js"

export const createPost = async (req, res, next) => {

    try {
        const { title, desc,email } = req.body
        const file = req.file.filename

        if (!title || !desc || !file ) {
            return next(new ErrorHandler(400, "Please fill all the fields create post"))
        }

        const createdPost = await Post.create({ title, desc, file,email})

        res.status(201).json({
            success: true,
            message: "Post created successfully",
            createdPost
        })

    } catch (error) {
        console.log(error)
    }




}

export const getposts = async (req, res, next) => {

    try {
        let allposts = await Post.find()
        res.status(200).json({
            success: true,
            allposts
        })
    } catch (error) {
        console.log(error)
        console.log("error in getposts controller")
    }
}


export const getpost = async (req, res, next) => {
    try {
        const { id } = req.params
        const post = await Post.findById(id)
        res.status(200).json({
            success: true,
            post
        })
    } catch (error) {

    }
}


export const editpost = async (req, res, next) => {
    try {
        const { id } = req.params
        const { title, desc } = req.body
        if (!title || !desc) {
            return next(new ErrorHandler(400, "Please fill all the fields edit post"))
        }
        const updatedpost = await Post.findByIdAndUpdate(id, { title, desc }, { new: true })
        if (!updatedpost) {
            return next(new ErrorHandler(404, "Post not found"));
        }
        res.status(200).json({
            success: true,
            message: "Post updated successfully"
        })
    } catch (error) {
      
        console.log(error)
    }
}
export const deletepost = async (req, res, next) => {
    try {
        const {id} = req.params
        const deletedpost = await Post.findByIdAndDelete(id)
        if (!deletedpost) {
            return next(new ErrorHandler(404, "Post not found"));
        }
        res.status(200).json({
            success: true,
            message: "Post deleted successfully"
        })


    } catch (error) {
       
        console.log(error)
    }
}
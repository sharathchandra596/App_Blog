import express from "express";
import { verifyUser } from "../middlewares/VerifyUser.js";

import multer from "multer";
import path, { extname } from "path";
import { createPost, deletepost, editpost, getpost, getposts } from "../controller/PostController.js";

const router = express.Router()

const storage= multer.diskStorage({
    destination: (req,res,cb)=>{
        cb(null,"public/images")
    },
    filename: (req,file,cb)=>{
        cb(null,file.fieldname+ "_"+ Date.now()+ path.extname(file.originalname))
    }
})

const upload = multer({storage})


router.post("/create",verifyUser,upload.single("file"),createPost)
router.get("/getposts",getposts)
router.get("/getpost/:id",getpost)
router.put("/editpost/:id",editpost)
router.delete("/deletepost/:id",deletepost)



export default router
import express, { application } from "express"
import { login, loginUser, logout, register } from "../controller/userController.js"
import { verifyUser } from "../middlewares/VerifyUser.js"


const router = express.Router()

router.post("/register",register)
router.post("/login",login)
router.get("/logout",logout)
router.get("/loginuser",verifyUser,loginUser)


export default router
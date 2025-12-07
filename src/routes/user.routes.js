import { Router } from "express";
import { registerUser } from "../controllers/user.controllers.js";


import { upload } from "../middlewares/multer.middleware.js";

const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxconut: 1
        },
        {
            name: "coverImage",
            maxconut: 1
        }
    ]),
    registerUser
)




export default router
import express from "express";
import userController from "../controllers/userController";
import authenticationMiddleware from "../middleware/authenticationMiddleware";
import upload from "../middleware/multer";

const userRouter = express.Router();
const controller = userController();

userRouter.get("/",authenticationMiddleware,controller.getUserDetails);
userRouter.post("/upload-video",authenticationMiddleware,upload.single('video'),controller.uploadVideo)

export default userRouter;

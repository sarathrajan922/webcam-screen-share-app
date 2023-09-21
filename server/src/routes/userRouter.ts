import express from "express";
import userController from "../controllers/userController";
import authenticationMiddleware from "../middleware/authenticationMiddleware";

const userRouter = express.Router();
const controller = userController();

userRouter.get("/",authenticationMiddleware,controller.getUserDetails);

export default userRouter;

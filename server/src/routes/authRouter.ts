import express from "express";
import authController from "../controllers/authController";

const authRouter = express.Router();
const controller = authController();

authRouter.post("/", controller.userSignup);

export default authRouter;

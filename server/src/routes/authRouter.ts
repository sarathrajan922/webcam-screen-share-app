import express from "express";

import { userSignup } from '../controllers/authController';


const authRouter = express.Router();

authRouter.get('/',userSignup)

export default authRouter;
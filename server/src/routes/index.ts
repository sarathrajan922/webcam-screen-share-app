import { Application } from "express";
import authRouter from "./authRouter";
import userRouter from "./userRouter";

const router = (app: Application)=>{
    app.use('/api/auth', authRouter)
    app.use('/api/user',userRouter)
}

export default router;

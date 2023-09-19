import { Application } from "express";
import authRouter from "./authRouter";

const router = (app: Application)=>{
    app.use('/api/auth', authRouter)
}

export default router;

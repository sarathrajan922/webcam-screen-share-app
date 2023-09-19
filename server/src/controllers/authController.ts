import express, { Request, Response } from "express";
const authRouter = express.Router();

authRouter.get("/", (req: Request, res: Response) => {
  console.log(req.url);
  res.send("this is authRouter...");
});

export default authRouter;

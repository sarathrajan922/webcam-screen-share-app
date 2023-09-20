import { Request, Response } from "express";
import { HttpStatus } from "../types/httpStatus";
import asyncHandler from "express-async-handler";

const authController = () => {
  const userSignup = asyncHandler(async (req: Request, res: Response) => {
    //call helper function
    console.log(req.body)
    res.status(HttpStatus.OK).send("api hit  authController");
  });
  return {
    userSignup,
  };
};
export default authController;

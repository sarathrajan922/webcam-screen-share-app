import { Response } from "express";
import { HttpStatus } from "../types/httpStatus";
import asyncHandler from "express-async-handler";
import { CustomRequest } from "../types/customRequest";
import authHelper from "../helper/authHelper";
import userHelper from "../helper/userHelper";

const authHelpers = authHelper();
const userHelpers = userHelper();

const userController = () => {
  const getUserDetails = asyncHandler(
    async (req: CustomRequest, res: Response) => {
      const email: string = req.payload?.email ?? "";

      const data = await authHelpers.getUserByEmail(email);

      res.status(HttpStatus.OK).send({
        status: HttpStatus.OK,
        userData: data,
      });
    }
  );


  const uploadVideo = asyncHandler(
    async (req:CustomRequest,res:Response)=>{
      const videoBlob = req.file as Express.Multer.File
      const result = await userHelpers.screenVideoUpload(videoBlob)
      if(result){
        res.status(HttpStatus.OK).send({
          status: HttpStatus.OK,
          message: 'video uploaded!!'
        })
      }
    }
  )

  return {
    getUserDetails,
    uploadVideo
  };
};

export default userController;

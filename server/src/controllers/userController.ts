import { Response } from "express";
import { HttpStatus } from "../types/httpStatus";
import asyncHandler from "express-async-handler";
import { CustomRequest } from "../types/customRequest";
import authHelper from "../helper/authHelper";

const authHelpers = authHelper();

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

  return {
    getUserDetails,
  };
};

export default userController;

import jwtAuthentication from "../middleware/jwt";
import UserModel from "../database/model/userModel";
import { UserDataInterface } from "../types/userData";

const jwtTokens = jwtAuthentication();
const authHelper = () => {
  const getUserByEmail = async (email: string) => {
    const data = await UserModel.find({ email });
    return data;
  };

  const userRegister = async (userData: UserDataInterface) => {
    const obj = {
      email: userData.email,
      role: "user",
    };
    const token = jwtTokens.generateToken(obj);
    const userExist = await getUserByEmail(userData.email);
    if (userExist.length) {
      return token;
    }
    UserModel.create(userData);
    return token;
  };

  return {
    getUserByEmail,
    userRegister,
  };
};

export default authHelper;

import Jwt_Authentication from "../middleware/jwt";
import UserModel from "../database/model/userModel";
import { UserDataInterface } from "../types/userData";

const jwtTokens = Jwt_Authentication();
const authHelper = () => {
  const getUserByEmail = async (email: string) => {
    const data = await UserModel.find({ email });
    return data;
  };

  const userRegister = async (userData: UserDataInterface) => {
    const result = UserModel.create(userData);
    const obj = {
      email: userData.email,
      role: "user",
    };
    console.log(result)
    const token = jwtTokens.generateToken(obj)
    console.log(token)
    return token
  };
 
  return {
    getUserByEmail,
    userRegister,
  };
};

export default authHelper;

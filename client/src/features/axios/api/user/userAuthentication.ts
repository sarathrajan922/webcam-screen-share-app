import axios, { AxiosRequestConfig } from "axios";
import BASE_URL, { urls } from "../../../../config";
import { UserFormData } from "../../../../types/userInterface";

export const registerUser = async (value: UserFormData) => {
  try {
    const config: AxiosRequestConfig = {
      url: BASE_URL + urls.USER_LOGIN_SIGNUP,
      method: "post",
      data: value,
    };

    const response = await axios(config);
    return response?.data;
  } catch (err: any) {
    if (err.message === "Request failed with status code 404") {
      throw new Error("Api not available!!");
    } else {
      throw new Error("something went wrong!!,Try again!");
    }
  }
};

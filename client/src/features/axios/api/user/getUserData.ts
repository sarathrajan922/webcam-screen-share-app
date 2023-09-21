import { AxiosRequestConfig } from "axios";
import userSetupAxiosInterceptors from "../interceptors/userAxiosInterceptor";
import BASE_URL,{urls} from "../../../../config";

const api = userSetupAxiosInterceptors();

export const getUserData = async()=>{
    try{
        const config:AxiosRequestConfig={
            url:BASE_URL+urls.GET_USER_DATA,
            method:'get'
        }

        const response = await api(config)
        return response?.data?.userData[0]
    }catch(err:any){
        if(err.message === 'Request failed with status code 401'){
            throw new Error('get user api not respond!')
        }else{
            throw new Error('something went wrong! Try Again!!')
        }
    }
}

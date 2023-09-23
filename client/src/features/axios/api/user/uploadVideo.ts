import {AxiosRequestConfig} from "axios";
import userSetupAxiosInterceptors from "../interceptors/userAxiosInterceptor";

import BASE_URL,{urls} from "../../../../config";

const api = userSetupAxiosInterceptors();

export const uploadScreenVideo = async(video:any)=>{
    try{
        const config:AxiosRequestConfig = {
            url: BASE_URL+urls.UPLOAD_VIDEO,
            method: 'post',
            data: video
        }

        const response = await api(config);
        return response.data
    }catch(err:any){
        if(err.message === 'Request failed with status code 404'){
            throw new Error('api not responding...')
        }else{
            throw new Error('something went wrong!')
        }
    }
}
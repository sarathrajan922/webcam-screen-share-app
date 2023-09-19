import {Request,Response} from 'express';

  export const  userSignup = (req:Request,res:Response)=>{
    console.log(req.url);
    res.send('api hit authcontroller...')
   }



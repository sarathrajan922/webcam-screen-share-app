import React from "react";

const Login:React.FC = ()=>{
    return (
         <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
            <div className="hidden sm:block">
                <img className="w-full h-full object-fill" src="https://res.cloudinary.com/dk4darniv/image/upload/v1695203076/animated%20svg/group-video-animate_katwvl.svg" alt="" />
            </div>

        
          <div className=" flex flex-col justify-center">
            <form className="max-w-[400px] w-full mx-auto bg-gray-600 p-8 px-8 rounded-lg">
                <h2 className="text-4xl dark:text-while font-bold text-center">Sign In</h2>
                <div className="flex flex-col text-gray-300 py-2">
                    <label htmlFor="">Name</label>
                    <input type="text" className="rounded-lg text-black bg-gray-100 mt-2 p-2 focus:border-blue-400 focus:bg-gary-700 focus:outline-none"/>
                </div>
                <div className="flex flex-col text-gray-300 py-2">
                    <label htmlFor="" >Email</label>
                    <input type="email" className="rounded-lg bg-gray-100 text-black mt-2 p-2 focus:border-blue-400 focus:bg-gary-700 focus:outline-none" />
                </div>
                <button className="w-full my-5 py-2 bg-slate-800 shadow-lg text-white rounded-lg">Sign in/Sign up</button>
            </form>
          </div>
           
         </div>
    )
}

export default Login;
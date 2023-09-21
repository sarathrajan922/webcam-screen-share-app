import React from "react";

const Header:React.FC = ()=>{
    return (
        <header className="bg-gray-900">
            <div className="container mx-auto flex justify-center items-center py-4">
                <h1 className="text-2xl text-white font-bold uppercase">Video Recorder</h1>
            </div>
        </header>
    )
}

export default Header;

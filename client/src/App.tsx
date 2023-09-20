import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App bg-gray-800 text-white">
        <h1 className="text-3xl">WEBCAM RECORDER</h1>
      </div>
      <Outlet />
    </>
  );
}

export default App;

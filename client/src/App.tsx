import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;

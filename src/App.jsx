import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import VideoMenu from "./pages/VideoMenu";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;

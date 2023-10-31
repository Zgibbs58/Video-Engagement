import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import VideoMenu from "./pages/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

export default App;

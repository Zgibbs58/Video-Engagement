import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import VideoMenu from "./pages/Home";
import Navigation from "./components/Header";
import Header from "./components/Header";

function App() {
  return (
    <>
      {/* <Navigation /> */}
      <Header />
      <Outlet />
    </>
  );
}

export default App;

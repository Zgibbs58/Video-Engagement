import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import VideoMenu from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

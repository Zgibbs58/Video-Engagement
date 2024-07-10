import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import ReactGA from "react-ga4";

function App() {
  useEffect(() => {
    const trackingId = import.meta.env.VITE_GA_TRACKING_ID;
    if (trackingId) {
      ReactGA.initialize(trackingId);
      ReactGA.send("pageview");
    } else {
      console.error("Google Analytics Tracking ID is missing");
    }
  }, []);
  return (
    <>
      <HelmetProvider>
        <Header />
        <Outlet />
        <Footer />
      </HelmetProvider>
    </>
  );
}

export default App;

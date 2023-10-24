import { useState } from "react";
import "./App.css";
import VideoPlayer from "./components/VideoPlayer";
import VideoMenu from "./components/VideoMenu";
import xrayData from "../utils/videoData";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <VideoMenu videos={xrayData} />
      {/* <div className="text-left">
        <VideoPlayer />
        <button onClick={() => setCount((count) => count + 1)}>👍 {count}</button>
      </div> */}
    </>
  );
}

export default App;

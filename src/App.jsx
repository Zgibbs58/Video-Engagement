import { useState } from "react";
import "./App.css";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-left">
        <VideoPlayer />
        <button onClick={() => setCount((count) => count + 1)}>👍 {count}</button>
      </div>
    </>
  );
}

export default App;

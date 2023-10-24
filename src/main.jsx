import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import xrayData from "../utils/videoData";

import App from "./App.jsx";
import VideoMenu from "./pages/VideoMenu.jsx";
import VideoPlayer from "./pages/VideoPlayer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <VideoMenu videos={xrayData} />,
      },
      {
        path: "/video",
        element: <VideoPlayer />,
      },
      {
        path: "*",
        element: <div>404 Not Found</div>,
      },
    ],
  },
]);
console.log("Before subscribe");
router.subscribe(({ pathname }) => {
  console.log("Current Path:", pathname);
});

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);

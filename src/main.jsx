import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import VideoPlayer from "./pages/VideoPlayer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
      {
        path: "/portfolio",
        element: <div>Portfolio</div>,
      },
      {
        path: "/contact",
        element: <div>Contact</div>,
      },
      {
        path: "/video/:videoId",
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

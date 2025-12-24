import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx"; // adjust path if needed

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

export default router;

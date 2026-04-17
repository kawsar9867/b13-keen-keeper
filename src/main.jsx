import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/Root/Root";
import Home from "./components/NavBar/Home/Home";
import Timeline from "./components/NavBar/Timeline/Timeline";
import Status from "./components/NavBar/Status/Status";
import CardDetails from "./components/API/CardDetails";
import { Component } from "lucide-react";
import Page404 from "./components/Page404/Page404";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/home",
        Component: Home,
      },
      {
        path: "/timeline",
        Component: Timeline,
      },
      {
        path: "/status",
        Component: Status,
      },
      {
        path: "/cardDetails/:id",
        Component: CardDetails,
        loader: () => fetch("/profile.json"),
      },
      {
        path: "/*",
        Component: Page404,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider
      fallbackElement={<span>Loading...</span>}
      router={router}
    ></RouterProvider>
  </StrictMode>,
);

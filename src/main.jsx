import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
}from "react-router"
import Root from './components/Root/Root';
import Home from './components/NavBar/Home/Home'
import Timeline from './components/NavBar/Timeline/Timeline'
import Status from './components/NavBar/Status/Status'
import CardDetails from './components/API/CardDetails';


const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children: [
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
        path:"/cardDetails/:id",
        Component:CardDetails,
        loader: () => fetch("/profile.json")
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider fallbackElement={<span>Loading...</span>} router={router}></RouterProvider>
  </StrictMode>,
)

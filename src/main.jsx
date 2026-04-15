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


const userPromis = fetch ("../public/Json/Api.json").then((res) => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
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
      // {
      //  path:"id",
      //   element:<Suspense fallback={<span>Loading...</span>}><Id userPromis={userPromis}></Id></Suspense>

      // }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

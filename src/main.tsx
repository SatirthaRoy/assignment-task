import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FirstPage from './Components/FirstPage.tsx';
import Private from './Components/Private.tsx';
import SecondPage from './Components/SecondPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: '/',
        element: <FirstPage/>
      },
      {
        path: '/secondpage',
        element: <Private><SecondPage/></Private>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

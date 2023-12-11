import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/login';
import Signup from './components/signup';
import MenuAppBar from './components/MenuAppBar';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },

  {
    path: "/dashboard",
    element: <MenuAppBar/>,
  },
  {
    path: "*",
    element: "NOT FOUND",
  }



]);


ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);


import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainlayout from "../Mainlayout/Mainlayout";
import HomePage from "../pages/Home/HomePage/HomePage";
import ErrorElement from "../Errorelement/ErrorElement";
import Login from "../Login/Login";
import Regestore from "../Regestore/Regestore";
import Menu from "../pages/Menu/Menu/Menu";


   export const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      errorElement: <ErrorElement></ErrorElement>,
      children: [
        {
          path: "/",
          element: <HomePage></HomePage>
        },
        {
          path: '/ourmenu',
          element: <Menu></Menu>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/regestore",
          element:<Regestore></Regestore>
        }
      ]
    },
  ]);
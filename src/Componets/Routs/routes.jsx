import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainlayout from "../Mainlayout/Mainlayout";
import HomePage from "../pages/Home/HomePage/HomePage";
import ErrorElement from "../Errorelement/ErrorElement";


   export const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      errorElement: <ErrorElement></ErrorElement>,
      children: [
        {
          path: "/",
          element: <HomePage></HomePage>
        }
      ]
    },
  ]);
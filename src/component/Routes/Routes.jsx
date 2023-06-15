import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ClassesPage from "../Pages/ClassesPage/ClassesPage";
import Instructors from "../Pages/Instructors/Instructors";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/Register",
          element: <Register></Register>,
        },
        {
          path: "/classes",
          element: <ClassesPage></ClassesPage>,
        },
        {
          path: "/instructors",
          element: <Instructors></Instructors>,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage></ErrorPage> ,
    }
  ]);
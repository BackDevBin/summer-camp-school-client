import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ClassesPage from "../Pages/ClassesPage/ClassesPage";
import Instructors from "../Pages/Instructors/Instructors";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyClass from "../Pages/Dashboard/MyClass/MyClass";


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
          loader: () => fetch("https://summer-camp-server-rho-woad.vercel.app/classes")
        },
        {
          path: "/instructors",
          element: <Instructors></Instructors>,
          loader: () => fetch("https://summer-camp-server-rho-woad.vercel.app/classes")
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage></ErrorPage> ,
    },
    {
      path: "/dashboard",
      element: <Dashboard></Dashboard> ,
      children: [
        {
          path: "myclass",
          element: <MyClass></MyClass> ,
        },
      ]
    }
  ]);
import { createBrowserRouter } from "react-router";
import MainLayout from "./MainLayout/MainLayout";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Sign-up/SignUp";

let Router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: Home ,
      },
      {
        path: "/sign-in",
        Component: Login ,
      },
      {
        path: "/sign-up",
        Component: SignUp ,
      },
    ],
  },
]);

export default Router;
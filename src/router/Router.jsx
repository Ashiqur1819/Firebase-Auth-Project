import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../components/Home";
import SignUp from "../components/SignUp";
import LogIn from "../components/LogIn";
import Orders from "../components/Orders";
import PrivateRouter from "./PrivateRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "signup",
            element: <SignUp></SignUp>
        },
        {
            path: "login",
            element: <LogIn></LogIn>
        },
        {
            path: "orders",
            element: <PrivateRouter><Orders></Orders></PrivateRouter>
        },
    ]
  },
]);

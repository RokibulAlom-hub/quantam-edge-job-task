import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../layouts/Homelayout";
import Home from "../pages/Homepage/Home";
import LoginPage from "../pages/Loginpage/Login";

export const  router = createBrowserRouter([
    {
        path:"/",
        element:<Homelayout/>,
        children:[
            {
              path:"/",
              element:<Home/>
            },
            {
              path:"/login",
              element:<LoginPage/>
            },
        ]
    }
])
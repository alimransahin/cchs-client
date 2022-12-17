import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Admisson from "../Pages/Admission/Admisson";
import Home from "../Pages/Home/Home/Home";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/admission',
                element:<Admisson></Admisson>
            }
        ]
    }
])
import {Navigate, createBrowserRouter} from "react-router-dom";

import React from 'react'
import Notfound from "./view/Notfound";
import Login from "./view/Login";
import Signup from "./view/Signup";
import Dashboard from "./view/Dashboard";
import DefaultLayout from "./component/DefaultLayout";
import GuestLayout from "./component/GuestLayout";
import Users from "./view/Users";


const router = createBrowserRouter( [

{
// this secion is for users with authenticaiton

    path: "/",
    element: <DefaultLayout/>,
    children: [
        {

        path: "/",
        element: <Navigate to="/users" />
    }, {

        path: "/dashboard",
        element: <Dashboard/>
    }, {

        path: "/users",
        element: <Users/>
    }
]
},

{
// this secion is for users without authenticaiton
    path: "/",
    element: <GuestLayout/>,
    children:[{

        path: "/login",
        element: <Login/>
    },{

        path: "/signup",
        element: <Signup/>
    }]

},

{
    // any url that is not listed in routes sould run this page
    path: "*",
    element: <Notfound/>
},
])


export default router

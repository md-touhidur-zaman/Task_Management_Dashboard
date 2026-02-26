import { createBrowserRouter,Navigate } from "react-router";
import App from "../App";
import DashboardLayout from "../components/Layouts/DashboardLayout";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import Login from "../pages/Auth/Login";
import React from "react";

const router = createBrowserRouter([
    {
        path:"/",
        Component: App,
        children: [
            {
                index:true,
                element: React.createElement(Navigate, { to: "/login", replace: true })
            },
            {
                path: "/login",
                Component: Login

            },
            {
                path: "/dashboard",
                Component: DashboardLayout,
                children: [
                    {
                        index:true,
                        Component: DashboardHome
                    }
                ]
            }
        ]
    }
])

export default router
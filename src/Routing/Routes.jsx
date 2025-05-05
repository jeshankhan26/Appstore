import { createBrowserRouter, RouterProvider } from "react-router";

import React from "react";
import Root from "../Root";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import Home from "../Pages/Home";
import AppDetails from "../Components/AppDetails";
import Profile from "../Pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch("app_data.json"),
        Component: Home ,
      },
    ],
  },
  {
    path: "/login",
    Component: Login ,
  },
  {
    path: "/register",
    Component: Registration ,
  },
  {
    path: "/app/:id",
    Component: Profile ,
  },
  {
    path: "/apps/:id",
    loader: () => fetch("/app_data.json"),
    Component: AppDetails ,
  },
]);

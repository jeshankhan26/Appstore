import { createBrowserRouter, RouterProvider } from "react-router";

import Root from "../Root";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import Home from "../Pages/Home";
import AppDetails from "../Components/AppDetails";
import Profile from "../Pages/Profile";
import CategoryApp from "../Components/CategoryApp";
import CategoryAppList from "../Pages/CategoryAppList";
import AppRoot from "../AppRoot";
import AllApp from "../Components/AllApp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch("/app_data.json"),
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
  
  {
    path: "/items",
   
    Component: AppRoot ,
    children:[
      {index:true, loader: () => fetch("/app_data.json"),Component: AllApp},
      {
        path: "/items/:name",
        loader: () => fetch("/app_data.json"),
        Component: CategoryAppList ,
      },
    ]
  },
]);

import React, { ReactElement } from "react";
import Login from "./components/Login";
import Home from "./components/Home";

type RouteType = {
  path: string;
  component: ReactElement;
};

export const routes: Array<RouteType> = [
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/home",
    component: <Home />,
  },
];

import React, { ReactElement } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

type RouteType = {
  path: string;
  component: ReactElement;
};

export const routes: Array<RouteType> = [
  {
    path: "login",
    component: <Login />,
  },
  {
    path: "register",
    component: <Register />,
  },
];

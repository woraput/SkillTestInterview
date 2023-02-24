import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Home from "../components/Home";
import Login from "../components/Login";
import Playground from "../components/Playground";
import Register from "../components/Register";

import GuardedRoute from "./GuardedRoute";

type Props = {};

const Router = (props: Props) => {
  return (
    <Routes>
      <Route path="/" index element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="home" element={GuardedRoute(<Home />)} />
      <Route path="playground" element={GuardedRoute(<Playground />)} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Router;

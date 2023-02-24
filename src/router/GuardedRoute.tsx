import { useContext } from "react";
import { AuthContext } from "../context/AuthenProvider";
import { Navigate } from "react-router-dom";

type Props = {};

const GuardedRoute = (Component: JSX.Element) => {
  const authenticated = useContext(AuthContext)?.dataProvider.isAuthen;

  if (!authenticated) {
    return <Navigate to="/" replace />;
  }

  return Component;
};

export default GuardedRoute;

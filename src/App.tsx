import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";

import AuthenProvider from "./context/AuthenProvider";
import Router from "./router/Router";

const App = () => {
  return (
    <AuthenProvider>
      <div className={"container mx-auto h-full flex flex-col"}>
        <Header />
        <Router />
      </div>
    </AuthenProvider>
  );
};

export default App;

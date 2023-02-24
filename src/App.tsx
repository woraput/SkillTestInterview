import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

import AuthenProvider from "./context/AuthenProvider";

const App = () => {
  return (
    <AuthenProvider>
      <div className={"container mx-auto h-full flex flex-col"}>
        <Header />

        <Routes>
          <Route path="/" index element={<Login />} />
          <Route path="register" index element={<Register />} />
          <Route path="home" index element={<Home />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </AuthenProvider>
  );
};

export default App;

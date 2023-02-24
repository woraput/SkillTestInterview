import Header from "./components/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  return (
    <div className={"container mx-auto h-full flex flex-col"}>
      <Header />

      <Routes>
        <Route path="/" index element={<Login />} />
        <Route path="register" index element={<Register />} />
        <Route path="home" index element={<Home />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;

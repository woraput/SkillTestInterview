import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        {routes?.map((route, index) => (
          <Route key={index} path={route?.path} element={route?.component} />
        ))}
      </Routes>
    </Router>
  );
};

export default App;

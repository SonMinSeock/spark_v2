import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "../screens/Home";
import Login from "../screens/login/Login";
import New from "../screens/login/New";

const Routing = ({ isLogin }) => {
  return (
    <Router>
      <Routes>
        <Route path="/login/new" element={<New />} />
        <Route
          path="/login"
          element={isLogin ? <Navigate replace to="/" /> : <Login />}
        />
        <Route
          path="/"
          element={isLogin ? <Home /> : <Navigate replace to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default Routing;

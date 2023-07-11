import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "../screens/Home";
import Login from "../screens/login/Login";
import New from "../screens/login/New";
import Question from "../screens/question/Question";
import Info from "../screens/info/Info";

const Routing = ({ isLogin }) => {
  return (
    <Router>
      <Routes>
        <Route path="/info" element={<Info />} />
        <Route path="/login/new/question" element={<Question />} />
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

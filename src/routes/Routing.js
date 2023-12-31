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
import Profile from "../screens/profile/Profile";
import Report from "../screens/profile/report/Report";
import KakaoCallback from "../components/KakaoCallback/KakaoCallback";
import Intro from "../screens/intro/Intro";

const Routing = ({ isLogin, loginHandler }) => {
  return (
    <Router>
      <Routes>
        <Route
          path="/oauth"
          element={<KakaoCallback loginHandler={loginHandler} />}
        />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/profile/:id/report" element={<Report />} />
        <Route path="/info" element={<Info />} />
        <Route path="/login/new/question" element={<Question />} />
        <Route path="/intro" element={<Intro />} />
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

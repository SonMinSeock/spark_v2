import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SplashScreen from "../screens/splash/SplashScreen";
import InitScreen from "../screens/init/InitScreen";
import QuestionScreen from "../screens/question/QuestionScreen";
import ShareScreen from "../screens/share/ShareScreen";
import LoginScreen from "../screens/login/LoginScreen";
import Notification from "../screens/notification/NotificationScreen";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/start" element={<InitScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/question" element={<QuestionScreen />} />
        <Route path="/share" element={<ShareScreen />} />
      </Routes>
    </Router>
  );
};

export default Routing;

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SplashScreen from "../screens/splash/SplashScreen";
import InitScreen from "../screens/init/InitScreen";
import QuestionScreen from "../screens/question/QuestionScreen";
import ShareScreen from "../screens/share/ShareScreen";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<InitScreen />} />
        <Route path="/question" element={<QuestionScreen />} />
        <Route path="/share" element={<ShareScreen />} />
      </Routes>
    </Router>
  );
};

export default Routing;

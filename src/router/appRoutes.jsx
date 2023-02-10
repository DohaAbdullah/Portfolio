import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/mainPage";

function AppRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default AppRoutes;

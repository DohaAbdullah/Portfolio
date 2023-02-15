import { Routes, Route } from "react-router-dom";
import Blogs from "../pages/blogs";
import MainPage from "../pages/mainPage";

function AppRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/blogs" element={<Blogs />} />
    </Routes>
  );
}

export default AppRoutes;

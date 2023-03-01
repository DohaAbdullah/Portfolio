import { Routes, Route } from "react-router-dom";
import Blogs from "../pages/blogs";
import Contact from "../pages/contact";
import MainPage from "../pages/mainPage";

function AppRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;

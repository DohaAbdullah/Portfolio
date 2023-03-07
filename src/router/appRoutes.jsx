import { Routes, Route } from "react-router-dom";
import Resume from "../components/resume";
import Blogs from "../pages/blogs";
import Contact from "../pages/contact";
import MainPage from "../pages/mainPage";
import PdfViewer from "../components/pdfViewer";

function AppRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/resume" element={<Resume />} /> */}
      <Route path="/download" element={<PdfViewer pdf="resume.pdf" />} />
    </Routes>
  );
}

export default AppRoutes;

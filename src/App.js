import "./App.css";
import AppRoutes from "./router/appRoutes";
import PdfViewer from "./components/pdfViewer";

function App(props) {
  return (
    <div className="App">
      <AppRoutes />
      <PdfViewer pdf="Resume_.pdf" />
    </div>
  );
}

export default App;

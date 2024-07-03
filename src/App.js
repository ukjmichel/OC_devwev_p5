import { HomePage,AboutPage,LocationPage, ErrorPageNotFound } from "./assets/pages";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./assets/styles/index.scss";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/location/:id" element={<LocationPage />} />
        <Route path="*" element={<Navigate to="/error_page_not_found" />} />
        <Route path="/error_page_not_found" element={<ErrorPageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

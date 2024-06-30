import { HomePage,AboutPage,LocationPage, ErrorPageNotFound } from "./assets/pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/styles/index.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/location/:id" element={<LocationPage />} />
        <Route path="*" element={<ErrorPageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

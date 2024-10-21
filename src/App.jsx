import { Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import LanguageSwitcher from "./components/LanguageSwitcher";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import Navbar from "./components/Navbar";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname == "/";
  const isFound =
    location.pathname === "/" ||
    location.pathname === "/about" ||
    location.pathname === "/work" ||
    location.pathname === "/contact";
  return (
    <>
      {isFound && (isHomePage ? <LanguageSwitcher /> : <Navbar />)}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;

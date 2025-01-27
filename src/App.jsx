import { Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import LanguageSwitcher from "./components/Language/LanguageSwitcher";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";

import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/NavBar/Navbar";
import GymApp from "./pages/Work/GymAppPage";
import LivePulse from "./pages/Work/LivePulsePage";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname == "/";
  const isFound =
    location.pathname === "/" ||
    location.pathname === "/about" ||
    location.pathname === "/work" ||
    location.pathname === "/work/gym-app" ||
    location.pathname === "/work/live-pulse" ||
    location.pathname === "/contact";

  return (
    <>
      {isFound && (isHomePage ? <LanguageSwitcher /> : <Navbar />)}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/work/gym-app" element={<GymApp />} />
        <Route path="/work/live-pulse" element={<LivePulse />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;

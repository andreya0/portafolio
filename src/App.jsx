import { useTranslation } from "react-i18next";
import "./index.css";
import Portfolio from "./components/Portfolio";
import LanguageSwitcher from "./components/LanguageSwitcher";

function App() {
  return (
    <>
      <div className="absolute top-4 right-4 z-10">
        <LanguageSwitcher />
      </div>
      <Portfolio />
    </>
  );
}

export default App;

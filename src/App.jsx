import { useTranslation } from "react-i18next";
import "./index.css";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Portfolio from "./components/portfolio";

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

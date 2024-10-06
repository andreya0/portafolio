import { useTranslation } from "react-i18next";
import "./App.css";
import LanguageSwitcher from "./components/LanguageSwitcher";

function App() {
  const { t } = useTranslation();

  return <LanguageSwitcher></LanguageSwitcher>;
}

export default App;

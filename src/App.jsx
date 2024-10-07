import { useTranslation } from "react-i18next";
import "./index.css";
import LanguageSwitcher from "./components/LanguageSwitcher";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <LanguageSwitcher />
    </>
  );
}

export default App;

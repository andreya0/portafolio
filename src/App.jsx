import { useTranslation } from "react-i18next";
import "./App.css";

function App() {
  const { t } = useTranslation();

  return <h2>{t("welcome_to_react")}</h2>;
}

export default App;

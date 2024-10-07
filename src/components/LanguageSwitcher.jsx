import { useState, useEffect } from "react";
import i18n from "i18next";

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState(() => {
    return window.localStorage.getItem("i18nextLng") || "es";
  });

  useEffect(() => {
    const currentLanguage =
      i18n.language || window.localStorage.getItem("i18nextLng") || "es";
    setLanguage(currentLanguage);
  }, []);

  const handleChange = (e) => {
    const selectedLang = e.target.value;
    setLanguage(selectedLang);
    i18n.changeLanguage(selectedLang);

    document.title = i18n.t("title");
    document.documentElement.lang = selectedLang;

    window.localStorage.setItem("i18nextLng", selectedLang);
  };

  return (
    <select value={language} onChange={handleChange}>
      <option value="es">ES</option>
      <option value="en">EN</option>
    </select>
  );
}

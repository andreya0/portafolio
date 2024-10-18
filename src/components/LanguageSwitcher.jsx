import { useState, useEffect } from "react";
import i18n from "i18next";
import { Globe } from "lucide-react";

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
    <div className="flex items-center bg-black bg-opacity-30 rounded-full px-3 py-1">
      <Globe className="text-white w-4 h-4 mr-2" />
      <select
        value={language}
        onChange={handleChange}
        className="bg-transparent text-white text-sm focus:outline-none"
      >
        <option value="es" className="text-black">
          ES
        </option>
        <option value="en" className="text-black">
          EN
        </option>
      </select>
    </div>
  );
}

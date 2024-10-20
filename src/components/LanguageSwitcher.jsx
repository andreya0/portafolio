import { useState, useEffect, useRef } from "react";
import i18n from "i18next";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const dropdownRef = useRef(null);
  const containerRef = useRef(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [language, setLanguage] = useState(() => {
    return window.localStorage.getItem("i18nextLng") || "es";
  });

  useEffect(() => {
    const currentLanguage =
      i18n.language || window.localStorage.getItem("i18nextLng") || "es";
    setLanguage(currentLanguage);
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (e) => {
    const selectedLang = e;
    setLanguage(selectedLang);
    i18n.changeLanguage(selectedLang);

    document.title = i18n.t("title");
    document.documentElement.lang = selectedLang;

    window.localStorage.setItem("i18nextLng", selectedLang);
    setDropdownOpen(false);
  };
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !containerRef.current.contains(event.target)
    ) {
      setDropdownOpen(false);
    }
  };

  return (
    <div className="relative inline-block" ref={containerRef}>
      <div
        onClick={toggleDropdown}
        className="flex items-center bg-gray-500 bg-opacity-25 rounded-full px-3 py-1 cursor-pointer"
      >
        <Globe className="text-white w-4 h-4 mr-2" />
        <span className="text-white text-sm">
          {language === "es" ? "ES" : "EN"}
        </span>
      </div>

      {isDropdownOpen && (
        <ul
          ref={dropdownRef}
          className="absolute mt-1 bg-white rounded shadow-lg w-16 bg-opacity-25"
        >
          <li
            onClick={() => handleLanguageChange("es")}
            className="cursor-pointer px-3 py-1 bg- hover:bg-gray-400 text-gray-300"
          >
            ES
          </li>
          <li
            onClick={() => handleLanguageChange("en")}
            className="cursor-pointer px-3 py-1 hover:bg-gray-400 text-gray-300"
          >
            EN
          </li>
        </ul>
      )}
    </div>
  );
}

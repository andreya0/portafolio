import { useState, useEffect, useRef } from "react";
import i18n from "i18next";
import { Globe, ChevronDown } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function LanguageSwitcher() {
  const location = useLocation();

  const isHomePage = location.pathname === "/";
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
  const colorConfig = {
    "/": {
      dropdown: "bg-gray-500 bg-opacity-25",
      text: "text-white",
      hover: "hover:bg-gray-400",
    },
    default: {
      dropdown: "bg-gray-800 bg-opacity-50",
      text: "text-white",
      hover: "hover:bg-gray-500",
    },
  };

  const { dropdown, text, hover } =
    colorConfig[location.pathname] || colorConfig.default;

  return (
    <div
      className=" inline-block absolute top-4 right-4 z-10"
      ref={containerRef}
    >
      <div
        onClick={toggleDropdown}
        className={`flex items-center rounded-full px-3 py-1 cursor-pointer ${dropdown}`}
      >
        <Globe className={`${text} w-4 h-4 mr-2`} />
        <span className={`${text} text-sm`}>
          {language === "es" ? "ES" : "EN"}
        </span>
        <ChevronDown
          className={`-mr-1 ml-[2px] h-5 w-5 ${text}`}
          aria-hidden="true"
        />
      </div>

      {isDropdownOpen && (
        <ul
          ref={dropdownRef}
          className="absolute mt-1 bg-white rounded shadow-lg w-20 bg-opacity-25"
        >
          <li
            onClick={() => handleLanguageChange("es")}
            className={`cursor-pointer flex items-center px-3 py-1 ${hover} text-gray-300`}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg"
              alt="Spanish"
              className="w-4 h-3 mr-2"
            />
            ES
          </li>
          <li
            onClick={() => handleLanguageChange("en")}
            className={`cursor-pointer flex items-center px-3 py-1 ${hover} text-gray-300`}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
              alt="USA"
              className="w-4 h-4 mr-2"
            />
            EN
          </li>
        </ul>
      )}
    </div>
  );
}

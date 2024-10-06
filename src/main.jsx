import React from "react";
import { createRoot } from "react-dom/client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import App from "./App";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "es"],
    fallbackLng: "es",
    detection: {
      order: ["localStorage", "querystring", "navigator"],
      caches: ["localstorage"],
    },
    backend: { loadPath: "/assets/locals/{{lng}}/translation.json" },
  });

const root = createRoot(document.getElementById("root"));
root.render(<App />);

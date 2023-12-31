import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";

i18n.init({
  resources: {
    en: {
      translation: require("../locales/english.json"),
    },
    ar: {
      translation: require("../locales/arabic.json"),
    },
  },
  fallbackLng: "en", // Default language
  debug: true, // Enable debug mode for development
  supportedLngs: ["en", "ar"],
  interpolation: {
    escapeValue: false, // React already escapes content by default
  },
});

const LangProvider = ({ children }: { children: React.ReactNode }) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default LangProvider;

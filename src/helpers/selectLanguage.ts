import i18n from "i18next";

export const handleLanguage = (index: number) => {
  const lang = i18n.language;
  if (index === 0) {
    if (lang === "en") i18n.changeLanguage("ar");
    else i18n.changeLanguage("en");
  }
};

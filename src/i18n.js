import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationFR from "./locales/fr/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
};

i18n
  .use(initReactI18next)
  // https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    fallbackLng: "en",
    // debug: true,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

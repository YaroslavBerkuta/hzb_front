import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import * as locales from "./locales";
import { setStorage } from "@/shared/services";

const defaultLang = "ua";

export * from "./types";

i18n.use(initReactI18next).init({
  debug: false,
  lng: defaultLang,

  interpolation: {
    escapeValue: false,
  },

  resources: {
    en: { translation: locales.en },
    ua: { translation: locales.ua },
  },
});

i18n.on("languageChanged", async (lang) => {
  try {
    await setStorage("lang", lang);
  } catch (error) {
    console.log("ERROR", error);
  }
});

import i18n from "i18next";

import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n

  .use(LanguageDetector)

  .use(initReactI18next)

  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      ua: {
        translation: {
          up: "На гору 🠕",
          header: {
            home: "Головна",
            list: "Список користувачів",
          },
          address: {
            beforeBr: "Адреса:",
            afterBr: "вул. Чигоріна 12, офіс 213, м. Київ, Україна",
          },
          addressProduction: {
            beforeBr: "Адреса виробництва:",
            afterBr: "м. Київ, вул. Зрошувальна 5В",
          },
          license:
            "© САЙТ ДЛЯ СПИСКУ ЮЗЕРІВ. 2022 ВСІ ПРАВА ЗАХИЩЕНІ. ЗРОБЛЕНО BY UniCode",

          welcome: "Ласкаво просимо",
        },
      },
      en: {
        translation: {
          up: "Up 🠕",
          header: {
            home: "Home",
            list: "List User",
          },
          address: {
            beforeBr: "Address:",
            afterBr: "St Chigorina 12, office 213, Kyiv, Ukraine",
          },
          addressProduction: {
            beforeBr: "Production address:",
            afterBr: "Kyiv, Zroshuvalna St, 5в",
          },
          license:
            "© WEBSITE FOR LIST USER. 2022 ALL RIGHTS PROTECTED. MADE BY UniCode",
          welcome: "welcome",
        },
      },
    },
  });

export default i18n;

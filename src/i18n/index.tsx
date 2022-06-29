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
          antCarousel: {
            slide1:
              "Ефективність: сучасні функції мають нові стратегії встановлення, завдяки чому проекти залишаються лише часткою свого минулого; Наприклад, у конфігурації за замовчуванням стандартні артефакти CRA тепер займають лише 45 МБ замість 237 МБ. Продуктивність також була покращена, оскільки більшість інсталяцій тепер займає лише кілька секунд навіть у надзвичайно великих проектах. Ми навіть зробили можливим досягти нуля секунд !",
            header1: "Чому вам слід перейти на Yarn Modern?",
            slide2:
              "Змінено формат налаштувань. Ми більше не читаємо файли .npmrcабо .yarnrc, замість того, щоб використовувати налаштування з .yarnrc.ymlфайлу .Деякі сторонні пакунки не вказують належним чином свої залежності, і їм потрібно буде допомогти через packageExtensionsналаштування.Підтримка текстових редакторів досить непогана, але вам потрібно буде запустити одноразове налаштування, наведене в нашій документації SDK .",
            header2:
              "Наскільки легкою буде перехід від класичного до сучасного?",
            slide3:
              "По-перше, пам’ятайте, що Yarn підтримує node-modulesстратегію встановлення , яка встановлює пакет точно так само, як, скажімо, npm. Тож якби Yarn не підтримував ESM, нічого б не було. Якщо ви почуєте, що хтось каже, що це не так, це насправді означає « Yrn PnP не підтримує ESM» — за винятком того, що він підтримує , починаючи з версії 3.1 .",
            header3: "Чи підтримує Yarn ESM?",
          },
          up: "На гору 🠕",
          header: {
            home: "Головна",
            list: "Список користувачів",
            currentLan: "Поточна мова",
            exit: "Вихід",
            signUp: "Вхід/Реєстрація",
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
          login: "Увійти",
          registr: "Реєстрація",
          butSubmit: "Відправити",
          form: {
            name: "Ім'я",
            surname: "Прізвище",
            age: "Вік",
            birthday: "День народження",
            password: "Пароль",
            confirm: "Підтвердежння паролю",
            placeHolder: "Виберіть дату",
          },
          phone: "Телефон",
        },
      },
      en: {
        translation: {
          antCarousel: {
            slide1:
              "Efficiency: modern features have new installation strategies because they remain only a part of their past; For example, in the order configuration, standard CRA artifacts now take up only 45 MB instead of 237 MB. Performance has also been improved, as more installations now take just a few seconds, even on large projects. We even made it possible to achieve zero seconds!",
            header1: "Why should you switch to Yarn Modern?",
            slide2:
              "Settings format changed. We no longer read .npmrc or .yarnrc files, instead of using the settings from the .yarnrc.yml file. Some third-party packages do not specify their dependencies properly and will need help through the package extension settings. run the one-time setup provided in our SDK documentation.",
            header2:
              "How easy will the transition from classical to modern be?",
            slide3:
              "First, keep in mind that Yarn supports a node-modules installation strategy that installs the package in exactly the same way as, say, npm. So if Yarn didn't support ESM, nothing would happen. If you hear someone say that's not true, it actually means \"Yrn PnP doesn't support ESM\" - except that it supports since version 3.1.",
            header3: "Чи підтримує Yarn ESM?",
          },
          up: "Up 🠕",
          header: {
            home: "Home",
            list: "List User",
            currentLan: "Current Language",
            exit: "Exit",
            signUp: "Login/Sign Up",
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
          welcome: "Welcome",
          login: "Login",
          registr: "Registration",
          butSubmit: "Submit",
          form: {
            name: "Name",
            surname: "Surname",
            age: "Age",
            birthday: "Birthday",
            password: "Password",
            confirm: "Confirm Password",
            placeHolder: "Select date",
          },
          phone: "Phone",
        },
      },
    },
  });

export default i18n;

import React from "react";
import { Carousel } from "antd";

import useStyles from "./style";

const Home = () => {
  const classes = useStyles();

  const textForSlider = [
    {
      header: "Чому вам слід перейти на Yarn Modern?",
      paragraph:
        "Ефективність: сучасні функції мають нові стратегії встановлення, завдяки чому проекти залишаються лише часткою свого минулого; Наприклад, у конфігурації за замовчуванням стандартні артефакти CRA тепер займають лише 45 МБ замість 237 МБ. Продуктивність також була покращена, оскільки більшість інсталяцій тепер займає лише кілька секунд навіть у надзвичайно великих проектах. Ми навіть зробили можливим досягти нуля секунд !",
      img: "../../assets/carousel_1.png",
    },
    {
      header: "Наскільки легкою буде перехід від класичного до сучасного?",
      paragraph:
        "Змінено формат налаштувань. Ми більше не читаємо файли .npmrcабо .yarnrc, замість того, щоб використовувати налаштування з .yarnrc.ymlфайлу .Деякі сторонні пакунки не вказують належним чином свої залежності, і їм потрібно буде допомогти через packageExtensionsналаштування.Підтримка текстових редакторів досить непогана, але вам потрібно буде запустити одноразове налаштування, наведене в нашій документації SDK .",
      img: "../../assets/carousel_2.png",
    },
    {
      header: "Чи підтримує Yarn ESM?",
      paragraph:
        "По-перше, пам’ятайте, що Yarn підтримує node-modulesстратегію встановлення , яка встановлює пакет точно так само, як, скажімо, npm. Тож якби Yarn не підтримував ESM, нічого б не було. Якщо ви почуєте, що хтось каже, що це не так, це насправді означає « Yrn PnP не підтримує ESM» — за винятком того, що він підтримує , починаючи з версії 3.1 .",
      img: "../../assets/carousel_3.png",
    },
  ];

  return (
    <div className={classes.root}>
      <div className={classes.coverCarousel}>
        <Carousel autoplay={true}>
          {textForSlider.map((item) => (
            <div className={classes.coverComponent}>
              <div className={classes.contentStyle}>
                <h1 className={classes.title}>{item.header}</h1>
                <p className={classes.description}>{item.paragraph}</p>
              </div>
              <div className={classes.styleImg}>
                <img src={item.img} alt="carousel" className={classes.photo} />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export { Home };

import React from "react";
import { Carousel } from "antd";
import { useTranslation } from "react-i18next";

import useStyles from "./style";

const Home = () => {
  const classes = useStyles();

  const { t } = useTranslation();

  const textForSlider = [
    {
      header: t("antCarousel.header1"),
      paragraph: t("antCarousel.slide1"),
      img: "../../assets/carousel_1.png",
    },
    {
      header: t("antCarousel.header2"),
      paragraph: t("antCarousel.slide2"),
      img: "../../assets/carousel_2.png",
    },
    {
      header: t("antCarousel.header3"),
      paragraph: t("antCarousel.slide3"),
      img: "../../assets/carousel_3.png",
    },
  ];

  return (
    <div className={classes.root}>
      <div className={classes.coverCarousel}>
        <Carousel autoplay={true}>
          {textForSlider.map((item) => (
            <div key={item.header} className={classes.coverComponent}>
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

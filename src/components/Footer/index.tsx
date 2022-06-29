import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

import { StoreContext } from "../../store";
import { headerNavigation } from "../../utils";

import useStyles from "./style";

const Footer = () => {
  const classes = useStyles();

  const history = useNavigate();
  const { t } = useTranslation();

  const context = React.useContext(StoreContext);
  const handleExit = () => {
    context.setCheck(false);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.top}>
          <div className={classes.menu}>
            {headerNavigation.map((item: any) => {
              if (item.name === "login/registr") {
                if (context.check === true) {
                  return (
                    <p
                      key={item.name}
                      className={classes.link}
                      onClick={handleExit}
                    >
                      {t("header.exit")}
                    </p>
                  );
                } else {
                  return (
                    <p
                      key={item.name}
                      className={classes.link}
                      onClick={() => history(item.path)}
                    >
                      {t("header.signUp")}
                    </p>
                  );
                }
              }
              if (item.name === "header.list") {
                return (
                  <p
                    key={item.name}
                    className={
                      classNames({ show: !context.check }) || classes.link
                    }
                    onClick={() => history(item.path)}
                  >
                    {t("header.list")}
                  </p>
                );
              } else {
                return (
                  <div
                    key={item.name}
                    className={classes.link}
                    onClick={() => history(item.path)}
                  >
                    {t(item.name)}
                  </div>
                );
              }
            })}
          </div>
          <div>
            <p
              className={classes.topAside}
              onClick={() => window.scrollTo(0, 0)}
            >
              {t("up")}
            </p>
          </div>
        </div>

        <div className={classes.contacts}>
          <div className={classes.contactsRight}>
            <a className={classes.link} href="mailto:tparandii@gmail.com">
              LISTUSER@GMAIL.COM
            </a>
          </div>
          <div className={classes.contactsMain}>
            <div className={classes.contactsMainTop}>
              <p className={classes.pForContacts}>
                {t("address.beforeBr")}
                <br /> {t("address.afterBr")}
              </p>
            </div>
            <div className={classes.contactsMainBottom}>
              <p className={classes.pForContacts}>
                {t("addressProduction.beforeBr")}
                <br />
                {t("addressProduction.afterBr")}
              </p>
            </div>
          </div>
          <div className={classes.contactsLeft}>
            <a href="callto:+380636235535" className={classes.link}>
              +380 63 623 55 35
            </a>
          </div>
        </div>

        <div className={classes.bottom}>
          <div className={classes.social}>
            <a
              href="https://www.facebook.com/"
              rel="noreferrer"
              target="_blank"
            >
              <img
                className={classes.pictureFacebook}
                src="./assets/fb.png"
                alt="Facebook"
              />
            </a>
            <a
              href="https://www.instagram.com/"
              rel="noreferrer"
              target="_blank"
            >
              <img
                className={classes.pictureFacebook}
                src="./assets/inst.png"
                alt="inst"
              />
            </a>
          </div>
          <div className={classes.copyRight}>
            <p className={classes.pForCopyRight}>{t("license")}</p>
            <img className={classes.logo} src="./assets/logo.png" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Footer };

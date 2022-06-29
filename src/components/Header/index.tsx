import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

import { StoreContext } from "../../store";
import { headerNavigation } from "../../utils";

import useStyles from "./style";

const Header = () => {
  const classes = useStyles();

  const history = useNavigate();
  const location = useLocation();

  const { t, i18n } = useTranslation();
  const context = React.useContext(StoreContext);

  const handleExit = () => {
    context.setCheck(false);
  };

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <img
          alt="logo"
          className={classes.imgHeader}
          onClick={() => history("/")}
          src="../../assets/yarn.png"
        />
        <div className={classes.textHeader}>
          {headerNavigation.map((item) => {
            if (item.name === "login/registr") {
              if (context.check === true) {
                return (
                  <p
                    key={item.name}
                    className={classes.cursor}
                    onClick={handleExit}
                  >
                    {t("header.exit")}
                  </p>
                );
              } else {
                return (
                  <p
                    key={item.name}
                    className={
                      classNames({
                        color: item.path === location.pathname,
                      }) || classes.cursor
                    }
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
                    classNames({
                      show: !context.check,
                      color: item.path === location.pathname,
                    }) || classes.cursor
                  }
                  onClick={() => history(item.path)}
                >
                  {t("header.list")}
                </p>
              );
            } else {
              return (
                <p
                  key={item.name}
                  className={
                    classNames({ color: item.path === location.pathname }) ||
                    classes.cursor
                  }
                  onClick={() => history(item.path)}
                >
                  {t(item.name)}
                </p>
              );
            }
          })}
          <p
            className={classes.cursor}
            onClick={() =>
              i18n.changeLanguage(i18n.language === "ua" ? "en" : "ua")
            }
          >
            {t("header.currentLan")}:{" "}
            {i18n.language === "ua" ? "УКРАЇНСЬКА" : "ENGLISH"}
          </p>
        </div>
      </div>
    </div>
  );
};
export { Header };

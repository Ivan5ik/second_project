import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { headerNavigation } from "../../utils";

import useStyles from "./style";

const Header = () => {
  const classes = useStyles();

  const history = useNavigate();

  const { t, i18n } = useTranslation();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <img className={classes.imgHeader} src="../../assets/yarn.png" />
        <div className={classes.textHeader}>
          {headerNavigation.map((item) => (
            <p onClick={() => history(item.path)}>{t(item.name)}</p>
          ))}
          <p
            onClick={() =>
              i18n.changeLanguage(i18n.language === "ua" ? "en" : "ua")
            }
          >
            Поточна мова: {i18n.language === "ua" ? "УКРАЇНСЬКА" : "ENGLISH"}
          </p>
        </div>
      </div>
    </div>
  );
};
export { Header };

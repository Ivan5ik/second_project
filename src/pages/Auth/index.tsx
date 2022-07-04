import React from "react";
import { useTranslation } from "react-i18next";
import { Tabs } from "antd";

import { Login } from "../../components/Log_in";
import { Registr } from "../../components/registr";
import { useForm } from "react-hook-form";

import useStyles from "./style";

const Forma = () => {
  const classes = useStyles();

  const { t } = useTranslation();
  const { TabPane } = Tabs;

  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <div className={classes.root}>
      <div className={classes.cover}>
        <div>
          <p className={classes.paragraphHeader}>{t("welcome")}</p>
        </div>
        <Tabs
          defaultActiveKey="2"
          onChange={onChange}
          className={classes.tabAnt}
        >
          <TabPane tab={t("login")} key="1">
            <Login />
          </TabPane>
          <TabPane tab={t("registr")} key="2">
            <Registr />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};
export { Forma };

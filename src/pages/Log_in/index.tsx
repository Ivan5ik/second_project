import React, { useState } from "react";
import { Form } from "antd";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

import { InputName } from "../../components/inputName";
import { InputSurname } from "../../components/inputSername";
import { InputEmail } from "../../components/inputEmail";
import { InputAge } from "../../components/inputAge";
import { InputDate } from "../../components/inputDate";
import { InputPassword } from "../../components/inputPassword";
import { InputConfirmPass } from "../../components/inputConfirmPass";
import { But } from "../../components/button";

import useStyles from "./style";

interface IListUser {
  values: any;
}

const Login = () => {
  const classes = useStyles();

  const { t } = useTranslation();

  const [listUser, setListUser] = useState<IListUser[]>([]);

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    // console.log(values.data.format("dddd"));
    values.date = values.date.format("MMMM Do YYYY");
    const res = [...listUser];
    res.push(values);
    setListUser(res);
    console.log(listUser);
  };

  const onFinishFailed = (errorInfo: any) => {
    // console.log("Failed:", errorInfo);
  };

  const [boolRegisrt, setBool] = useState(true);
  const [boolLogin, setLogin] = useState(false);

  const handleChooseFrom = (funcFlag: string) => {
    if (String(funcFlag) === "setRegistr") {
      setBool(true);
      setLogin(false);
    }
    if (String(funcFlag) === "setlogin") {
      setBool(false);
      setLogin(true);
    }
  };
  listUser.map((item, index) =>
    localStorage.setItem(String(index), JSON.stringify(item))
  );
  const testRES: string | null = localStorage.getItem("0");
  const b: object = JSON.parse(testRES);
  console.log(typeof b);

  // const testRES: any = JSON.parse(localStorage.getItem("0"));
  // console.log(typeof testRES);

  // const handleAddIteration = (values: any) => {
  //   const res = [...listUser];
  //   res.push(values);
  //   setListUser(res);
  // };

  return (
    <div className={classes.root}>
      <div className={classes.cover}>
        <div className={classes.textHeader}>
          <p className={classes.paragraphHeader}>{t("welcome")}</p>
          <div className={classes.coverAutorization}>
            <div className={classNames({ show: boolLogin }) || classes.login}>
              <p
                className={classes.textLogin}
                onClick={() => handleChooseFrom("setlogin")}
              >
                Увійти
              </p>
            </div>
            <div
              className={
                classNames({ show: boolRegisrt }) || classes.registration
              }
            >
              <p
                className={classes.textRegistration}
                onClick={() => handleChooseFrom("setRegistr")}
              >
                Реєстрація
              </p>
            </div>
          </div>
        </div>
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {boolRegisrt && (
            <>
              <InputName />
              <InputSurname />
              <InputEmail />
              <InputAge />
              <InputDate />
              <InputPassword />
              <InputConfirmPass />
              <But /*onClick={handleAddIteration}*/ />
            </>
          )}

          {boolLogin && (
            <>
              <InputEmail />
              <InputPassword />
            </>
          )}
        </Form>
      </div>
    </div>
  );
};
export { Login };

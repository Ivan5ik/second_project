import React from "react";
import { Form } from "antd";
import { useNavigate } from "react-router-dom";

import { InputEmail } from "../inputEmail";
import { InputPassword } from "../inputPassword";
import { ButtonAnt } from "../button";
import { StoreContext } from "../../store";

import useStyles from "./style";

const Login = () => {
  const classes = useStyles();

  const history = useNavigate();
  const context = React.useContext(StoreContext);

  let resultListUser: any = null;
  let resultParse: any = null;

  const onFinish = (values: any) => {
    resultListUser = localStorage.getItem("array");
    resultParse = JSON.parse(resultListUser);
    if (
      resultParse
        .map(
          (item: any) =>
            item.email === values.email && item.password === values.password
        )
        .includes(true)
    ) {
      context.setCheck(true);
      history("/listUser");
    } else {
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className={classes.root}
    >
      <InputEmail />
      <InputPassword />
      <ButtonAnt />
    </Form>
  );
};
export { Login };

import React from "react";
import { Form } from "antd";

import { InputName } from "../inputName";
import { InputSurname } from "../inputSername";
import { InputEmail } from "../inputEmail";
import { InputAge } from "../inputAge";
import { InputDate } from "../inputDate";
import { InputPassword } from "../inputPassword";
import { InputConfirmPass } from "../inputConfirmPass";
import { ButtonAnt } from "../button";

const Registr = () => {
  const listUser: any[] = [];

  const onFinish = (values: any) => {
    values.date = values.date.format("MMMM Do YYYY");
    if (!localStorage.getItem("array")?.includes(values.email)) {
      listUser.push(values);
      localStorage.setItem("array", JSON.stringify(listUser));
    } else {
      alert("Така пошта вже існує");
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
    >
      <InputName />
      <InputSurname />
      <InputEmail />
      <InputAge />
      <InputDate />
      <InputPassword />
      <InputConfirmPass />
      <ButtonAnt />
    </Form>
  );
};
export { Registr };

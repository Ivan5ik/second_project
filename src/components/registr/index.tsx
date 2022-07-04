import React, { FC, useEffect } from "react";
import { Form, Input } from "antd";
import { useForm, Controller } from "react-hook-form";

import { InputName } from "../InputName";
import { InputSurname } from "../InputSername";
import { InputEmail } from "../InputEmail";
import { InputAge } from "../InputAge";
import { InputDate } from "../InputDate";
import { InputPassword } from "../InputPassword";
import { InputConfirmPass } from "../InputConfirmPass";
import { ButtonAnt } from "../Button";
interface SelectProps {
  select?: string;
  lastName?: string | null;
}

const Registr: FC<SelectProps> = ({ select, lastName }) => {
  const listUser: any[] = [];

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  // const onFinish = (values: any) => {
  // values.date = values.date.format("MMMM Do YYYY");
  // if (!localStorage.getItem("array")?.includes(values.email)) {
  //   listUser.push(values);
  //   localStorage.setItem("array", JSON.stringify(listUser));
  // } else {
  //   alert("Така пошта вже існує");
  // }
  // };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const getChangeHandlerWithEvent =
    (name: string) => (event: { target: { value: any } }) =>
      setValue(name, event.target.value);

  useEffect(() => {
    register("lastName", { required: true });

    setValue("select", select);
  }, [register, setValue, select, lastName]);

  const hasErrorClass = (name: any) => ({
    className: errors[name] && "has-error",
  });
  const errorDetail = (name: any, message: any) =>
    errors[name] && <div className="ant-form-explain">{message}</div>;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      > */}
      <Form.Item label="name" {...hasErrorClass("lastName")}>
        <Input onChange={getChangeHandlerWithEvent("lastName")} />
        {errorDetail("lastName", "Please input your nickname!")}
      </Form.Item>

      {/* <InputName /> */}
      {/* <InputSurname />
      <InputEmail />
      <InputAge />
      <InputDate />
      <InputPassword />
      <InputConfirmPass />
      {/* </Form> */}
      <ButtonAnt />
    </form>
  );
};
export { Registr };

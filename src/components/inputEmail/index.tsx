import React from "react";
import { Form, Input } from "antd";
const InputEmail = () => {
  return (
    <Form.Item
      name="email"
      label="Email"
      rules={[
        { type: "email", message: "The input is not valid E-mail!" },
        {
          required: true,
          message: "Please input your E-mail!",
        },
      ]}
    >
      <Input />
    </Form.Item>
  );
};
export { InputEmail };

import React from "react";
import { Form, Input } from "antd";
const InputName = () => {
  return (
    <Form.Item
      label="Name"
      name="name"
      rules={[{ required: true, message: "Please input your name!" }]}
    >
      <Input />
    </Form.Item>
  );
};
export { InputName };

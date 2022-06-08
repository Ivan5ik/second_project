import React from "react";
import { Form, Input } from "antd";
const InputSurname = () => {
  return (
    <Form.Item
      label="Surname"
      name="surname"
      rules={[{ required: true, message: "Please input your surname!" }]}
    >
      <Input />
    </Form.Item>
  );
};
export { InputSurname };

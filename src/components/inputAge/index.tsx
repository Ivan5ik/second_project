import React from "react";
import { Form, InputNumber } from "antd";
const InputAge = () => {
  return (
    <Form.Item
      label="Age"
      name="age"
      rules={[{ type: "number", min: 1, max: 99, required: true }]}
    >
      <InputNumber />
    </Form.Item>
  );
};
export { InputAge };

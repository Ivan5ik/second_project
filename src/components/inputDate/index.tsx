import React from "react";
import { Form, DatePicker } from "antd";
const InputDate = () => {
  return (
    <Form.Item label="DatePicker" name="date" rules={[{ required: true }]}>
      <DatePicker />
    </Form.Item>
  );
};
export { InputDate };

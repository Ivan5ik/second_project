import React from "react";
import { Form, Input } from "antd";
const InputConfirmPass = () => {
  return (
    <Form.Item
      label="ConfirmPassword"
      name="Confirm_password"
      rules={[
        { required: true, message: "Please input your password!" },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue("password") === value) {
              return Promise.resolve();
            }
            return Promise.reject(
              new Error("The two passwords that you entered do not match!")
            );
          },
        }),
      ]}
    >
      <Input.Password />
    </Form.Item>
  );
};
export { InputConfirmPass };

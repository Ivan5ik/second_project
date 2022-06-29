import React from "react";
import { Form, Input } from "antd";
import { useTranslation } from "react-i18next";

const InputConfirmPass = () => {
  const { t } = useTranslation();

  return (
    <Form.Item
      label={t("form.confirm")}
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

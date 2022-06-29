import React from "react";
import { Form, Input } from "antd";
import { useTranslation } from "react-i18next";

const InputPassword = () => {
  const { t } = useTranslation();

  return (
    <Form.Item
      label={t("form.password")}
      name="password"
      rules={[{ required: true, message: "Please input your password!" }]}
    >
      <Input.Password />
    </Form.Item>
  );
};
export { InputPassword };

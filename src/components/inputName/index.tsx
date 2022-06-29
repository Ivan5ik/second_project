import React from "react";
import { Form, Input } from "antd";
import { useTranslation } from "react-i18next";

const InputName = () => {
  const { t } = useTranslation();

  return (
    <Form.Item
      label={t("form.name")}
      name="name"
      rules={[{ required: true, message: "Please input your name!" }]}
    >
      <Input />
    </Form.Item>
  );
};
export { InputName };

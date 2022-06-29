import React from "react";
import { Form, Input } from "antd";
import { useTranslation } from "react-i18next";

const InputSurname = () => {
  const { t } = useTranslation();

  return (
    <Form.Item
      label={t("form.surname")}
      name="surname"
      rules={[{ required: true, message: "Please input your surname!" }]}
    >
      <Input />
    </Form.Item>
  );
};
export { InputSurname };

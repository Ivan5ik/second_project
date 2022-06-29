import React from "react";
import { Form, InputNumber } from "antd";
import { useTranslation } from "react-i18next";

const InputAge = () => {
  const { t } = useTranslation();

  return (
    <Form.Item
      label={t("form.age")}
      name="age"
      rules={[{ type: "number", min: 1, max: 99, required: true }]}
    >
      <InputNumber />
    </Form.Item>
  );
};
export { InputAge };

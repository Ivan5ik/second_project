import React from "react";
import { Form, DatePicker } from "antd";
import { useTranslation } from "react-i18next";

const InputDate = () => {
  const { t } = useTranslation();

  return (
    <Form.Item
      label={t("form.birthday")}
      name="date"
      rules={[{ required: true }]}
    >
      <DatePicker placeholder={t("form.placeHolder")} />
    </Form.Item>
  );
};
export { InputDate };

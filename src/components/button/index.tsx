import React from "react";
import { Form, Button } from "antd";
import { useTranslation } from "react-i18next";

const ButtonAnt = () => {
  const { t } = useTranslation();

  return (
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        {t("butSubmit")}
      </Button>
    </Form.Item>
  );
};
export { ButtonAnt };

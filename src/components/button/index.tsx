import React, { FC } from "react";
import { Form, Button } from "antd";

interface IButton {
  onClick?: any;
}

const But: FC<IButton> = (props) => {
  const { onClick } = props;

  return (
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit" /*onClick={onClick}*/>
        Submit
      </Button>
    </Form.Item>
  );
};
export { But };

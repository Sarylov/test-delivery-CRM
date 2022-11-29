import React, { FC } from "react";
import { SingInFormProps } from "./SingInForm.props";
import "./SingInForm.module.css";
import { Button, Form, Input } from "antd";

interface ISingInData {
  name: string;
  password: string;
}

const SingInForm: FC<SingInFormProps> = ({ ...props }) => {
  const onFinish = (values: ISingInData) => {
    console.log("success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div {...props}>
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
        className="row-col"
      >
        <Form.Item
          className="username"
          label="Логин"
          name="login"
          rules={[
            {
              required: true,
              message: "Введите логин !",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          className="username"
          label="Пароль"
          name="password"
          rules={[
            {
              required: true,
              message: "введите пароль !",
            },
          ]}
        >
          <Input />
        </Form.Item>
        {/* 
        <Form.Item
          name="remember"
          className="aligin-center"
          valuePropName="checked"
        >
          <Switch defaultChecked onChange={onChange} />
          Remember me
        </Form.Item> */}

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SingInForm;

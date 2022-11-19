import React, { FC, useEffect } from "react";
import { CouriersFormProps } from "./CouriersForm.props";
import "./CouriersForm.module.css";
import { Button, Checkbox, Form, Input, Select } from "antd";
import { ICouriers } from "../../../../models/couriers";
import { Rule } from "antd/lib/form";

const CouriersForm: FC<CouriersFormProps> = ({
  editData,
  click,
  hideModal,
  ...props
}) => {
  // добавить логигу подгрузки всех тарифов
  const rates = [
    { name: "максимальный", id: "123" },
    { name: "оптимальный", id: "321" },
    { name: "продвинутый", id: "324" },
  ];

  const onFinish = (values: ICouriers) => {
    click();
    hideModal && hideModal();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div {...props}>
      <Form
        name="basic"
        labelCol={{ span: 9 }}
        wrapperCol={{ span: 16 }}
        initialValues={editData && { ...editData }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        // autoComplete="off"
      >
        <Form.Item
          label="ФИО"
          name="fullName"
          rules={[{ required: true, message: "Введите ФИО" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="телефон"
          name="phone"
          rules={[{ required: true, message: "введите номер телефона" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="логин"
          name="nickName"
          rules={[{ required: true, message: "Введите логин" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[
            { required: true, message: "введите пароль" },
            () => ({
              validator(_, value) {
                if (value !== "") {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("пароли не совпадают!"));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="passwordCheck"
          label="Подтверждение пароля"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "подтвердите пароль!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("пароли не совпадают!"));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="movementType"
          label="тип транспорта"
          rules={[{ required: true, message: "выберите тип транспорта!" }]}
        >
          <Select placeholder="выберите тип транспорта">
            <Select.Option value="машина">машина</Select.Option>
            <Select.Option value="велосипед">велосипед</Select.Option>
            <Select.Option value="пешком">пешком</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="rate"
          label="тариф"
          rules={[{ required: true, message: "выберите тариф!" }]}
        >
          <Select placeholder="выберите тариф">
            {rates.map((r) => (
              <Select.Option key={r.id} value={r.name}>
                {r.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="status"
          label="статус"
          rules={[{ required: true, message: "выберите статус!" }]}
        >
          <Select placeholder="выберите статус">
            <Select.Option value="работает">работает</Select.Option>
            <Select.Option value="не работает">не работает</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="comment"
          label="коментарий"
          // rules={[{ required: true, message: "введите коментарий" }]}
        >
          <Input.TextArea showCount maxLength={1000} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }} key={10}>
          <Button type="primary" htmlType="submit">
            отправить
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CouriersForm;

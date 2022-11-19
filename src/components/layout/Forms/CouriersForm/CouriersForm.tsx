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

  // const checkError = ({ getFieldValue }) => {};

  return (
    <div {...props}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: false }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        // autoComplete="off"
      >
        <Form.Item
          label="ФИО"
          name="fullName"
          rules={[{ required: true, message: "Введите ФИО" }]}
          initialValue={editData && editData.fullName}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="телефон"
          name="phone"
          rules={[{ required: true, message: "введите номер телефона" }]}
          initialValue={editData && editData.phone}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="логин"
          name="nickName"
          rules={[{ required: true, message: "Введите логин" }]}
          initialValue={editData && editData.nickName}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          initialValue={editData && editData.password}
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
          initialValue={editData && editData.passwordCheck}
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
          initialValue={editData && editData.movementType}
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
          initialValue={editData && editData.rate}
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
          initialValue={editData ? editData.status : "работает"}
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
          initialValue={editData?.comment && editData.comment}
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

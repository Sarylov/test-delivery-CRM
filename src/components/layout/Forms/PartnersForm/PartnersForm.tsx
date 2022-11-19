import React, { FC, useEffect } from "react";
import { PartnersFormProps } from "./PartnersForm.props";
import { Button, Form, Input, InputNumber, Select } from "antd";
import { IPartners } from "./../../../../models/partners";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const PartnersForm: FC<PartnersFormProps> = ({
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

  const onFinish = (values: IPartners) => {
    console.log("success:", values);

    click();
    hideModal && hideModal();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  console.log(
    editData && {
      ...editData,
      adresses: editData.adresses.map((a: { adress: string }) => a.adress),
    }
  );

  return (
    <div {...props}>
      <Form
        name="basic"
        labelCol={{ span: 9 }}
        wrapperCol={{ span: 16 }}
        initialValues={
          editData && {
            ...editData,
            adresses: editData.adresses.map(
              (a: { adress: string }) => a.adress
            ),
          }
        }
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Организция"
          name="organization"
          rules={[{ required: true, message: "Введите название организации" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="тип организации"
          name="type"
          rules={[{ required: true, message: "Введите тип организации" }]}
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
          rules={[{ required: true, message: "введите пароль" }]}
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
          label="телефон"
          name="phone"
          rules={[{ required: true, message: "введите номер телефона" }]}
        >
          <Input />
        </Form.Item>

        {/* адреса */}

        <Form.List
          name="adresses"
          rules={[
            {
              validator: async (_, names) => {
                if (!names || names.length < 1) {
                  return Promise.reject(
                    new Error("Введите хотя бы один адрес")
                  );
                }
              },
            },
          ]}
        >
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map((field, index) => (
                <Form.Item
                  label={`адрес ${index + 1}`}
                  required={false}
                  key={field.key}
                >
                  <Form.Item
                    {...field}
                    validateTrigger={["onChange", "onBlur"]}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message: "заполните поле или удалите его !",
                      },
                    ]}
                    noStyle
                  >
                    <Input style={{ width: "90%" }} />
                  </Form.Item>
                  {fields.length > 1 ? (
                    <MinusCircleOutlined
                      className="dynamic-delete-button"
                      style={{ marginLeft: "10px" }}
                      onClick={() => remove(field.name)}
                    />
                  ) : null}
                </Form.Item>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  style={{ width: "100%" }}
                  icon={<PlusOutlined />}
                >
                  добавить адрес
                </Button>
                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          )}
        </Form.List>

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
          label="время приготовления"
          name="timeCooking"
          rules={[{ required: true, message: "введите время приготовления" }]}
        >
          <InputNumber />
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

export default PartnersForm;

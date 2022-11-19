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
  return (
    <div {...props}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: false }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Организция"
          name="organization"
          rules={[{ required: true, message: "Введите название организации" }]}
          initialValue={editData && editData.organization}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="тип организации"
          name="type"
          rules={[{ required: true, message: "Введите тип организации" }]}
          initialValue={editData && editData.type}
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
          rules={[{ required: true, message: "введите пароль" }]}
          initialValue={editData && editData.password}
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
          label="телефон"
          name="phone"
          rules={[{ required: true, message: "введите номер телефона" }]}
          initialValue={editData && editData.phone}
        >
          <Input />
        </Form.Item>

        {/* адреса */}

        <Form.List
          name="adresses"
          rules={[
            {
              validator: async (_, adresses) => {
                if (!adresses || adresses.length < 1) {
                  return Promise.reject(new Error("введите хотя бы 1 адресс"));
                }
              },
            },
          ]}
        >
          {(
            fields = editData && editData.adresses,
            { add, remove },
            { errors }
          ) => (
            <>
              {/* {editData && editData.adresses.map{}} */}
              {fields.map((field, index) => (
                <Form.Item
                  label={`адрес${index + 1}`}
                  required={true}
                  key={String(index)}
                >
                  <Form.Item
                    // {...field}
                    validateTrigger={["onChange", "onBlur"]}
                    initialValue={editData && editData.adresses[index].adress}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message: "Введите адрес или удалите поле!",
                      },
                    ]}
                    noStyle
                  >
                    <Input style={{ width: "90%", marginRight: "10px" }} />
                  </Form.Item>

                  {fields.length > 1 ? (
                    <MinusCircleOutlined
                      className="dynamic-delete-button"
                      onClick={() => remove(field.name)}
                    />
                  ) : null}
                </Form.Item>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
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
          label="время приготовления"
          name="timeCooking"
          rules={[{ required: true, message: "введите время приготовления" }]}
          initialValue={editData && editData.timeCooking}
        >
          <InputNumber />
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

export default PartnersForm;

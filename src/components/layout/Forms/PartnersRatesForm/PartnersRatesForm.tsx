import React, { FC, useEffect } from "react";
import { IPartnersRatesFormProps } from "./PartnersRatesForm.props";
import { Button, Form, Input, InputNumber, Select } from "antd";
import { IPartnersRates } from "../../../../models/partnersRates";

const IPartnersRatesForm: FC<IPartnersRatesFormProps> = ({
  editData,
  click,
  hideModal,
  ...props
}) => {
  const onFinish = (values: IPartnersRates) => {
    values.activity = "выключен";
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
        initialValues={editData && { ...editData }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="название"
          name="name"
          rules={[{ required: true, message: "Введите название тарифа" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="тип организации"
          name="type"
          rules={[
            {
              required: true,
              message: "Введите тип организации которым будет доступен тариф",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="cтоимость подбора"
          name="takePrice"
          rules={[{ required: true, message: "Введите cтоимость подбора" }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="стоимость выгрузки"
          name="shipmentPrice"
          rules={[{ required: true, message: "Введите cтоимость выгрузки" }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="стоимость километра"
          name="kmPrice"
          rules={[{ required: true, message: "Введите стоимость километра" }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="комиссия(%)"
          name="commission"
          rules={[
            { required: true, message: "Введите комиссия за эквайринг(%) " },
          ]}
        >
          <InputNumber style={{ width: "100%" }} />
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

export default IPartnersRatesForm;

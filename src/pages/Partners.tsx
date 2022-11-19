import React from "react";
import { NavLink } from "react-router-dom";
import PartnersForm from "../components/layout/Forms/PartnersForm/PartnersForm";
import TableLayout from "../components/layout/TableTayout/TableLayout";
import Table from "../components/Table/Table";
import { IPartners } from "../models/partners";

export default function Partners() {
  const columns = [
    { title: "организация", dataIndex: "organization", key: "organization" },
    { title: "тип", dataIndex: "type", key: "type" },
    { title: "логин", dataIndex: "nickName", key: "nickName" },
    { title: "телефон", dataIndex: "phone", key: "phone" },
    { title: "адресы", dataIndex: "addresses", key: "addresses" },
    { title: "тариф", dataIndex: "rate", key: "rate" },
    { title: "комментарий", dataIndex: "comment", key: "comment" },
    {
      title: "время приготовления",
      dataIndex: "timeСooking",
      key: "timeСooking",
    },
    {
      title: "статус",
      dataIndex: "status",
      key: "status",
      filters: [
        { text: "работает", value: "работает" },
        { text: "не работает", value: "не работает" },
      ],
      filterMode: "tree",
      onFilter: (value: string, record: IPartners) =>
        record.status.startsWith(value),
      width: "30%",
    },
  ];

  const data: IPartners[] = [
    {
      key: "123",
      organization: "kfc",
      type: "ресторан",
      nickName: "kfc",
      phone: "+7 9618428224",
      adresses: ["адрес1", "адрес2"],
      rate: "продвинутый",
      comment: "хороший ресторан",
      timeCooking: 20,
      status: "работает",
      password: "123",
      passwordCheck: "123",
    },
    {
      key: "124",
      organization: "kfc",
      type: "ресторан",
      nickName: "kfc",
      phone: "+7 9618428224",
      adresses: ["адрес1", "адрес2"],
      rate: "продвинутый",
      comment: "хороший ресторан",
      timeCooking: 20,
      status: "не работает",
      password: "123",
      passwordCheck: "123",
    },
  ];

  return (
    <div>
      <NavLink to="/partners/rates">тарифы партнеров</NavLink>

      <TableLayout<IPartners>
        columns={columns}
        data={data}
        form={PartnersForm}
      />
    </div>
  );
}

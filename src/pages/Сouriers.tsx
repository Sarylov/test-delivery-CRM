import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ICouriers } from "../models/couriers";
import Table from "../components/Table/Table";
import CouriersForm from "./../components/layout/Forms/CouriersForm/CouriersForm";
import { Button } from "antd";
import Modal from "antd/lib/modal/Modal";
import TableLayout from "../components/layout/TableTayout/TableLayout";

export default function Couriers() {
  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "ФИО", dataIndex: "fullName", key: "fullName" },
    { title: "телефон", dataIndex: "phone", key: "phone" },
    { title: "логин", dataIndex: "nickName", key: "nickName" },
    {
      title: "Тип передвижения",
      dataIndex: "movementType",
      key: "movementType",
      filters: [
        { text: "машина", value: "машина" },
        { text: "велосипед", value: "велосипед" },
        { text: "пешком", value: "пешком" },
      ],
      filterMode: "tree",
      onFilter: (value: string, record: ICouriers) =>
        record.movementType.includes(value),
      width: "30%",
    },
    { title: "тариф", dataIndex: "rate", key: "rate" },
    { title: "комментарий", dataIndex: "comment", key: "comment" },
    {
      title: "статус",
      dataIndex: "status",
      key: "status",
      filters: [
        { text: "работает", value: "работает" },
        { text: "не работает", value: "не работает" },
      ],
      filterMode: "tree",
      onFilter: (value: string, record: ICouriers) =>
        record.status.startsWith(value),
      width: "30%",
    },
  ];

  const data: ICouriers[] = [
    {
      key: "1",
      id: "123",
      status: "не работает",
      fullName: "олег олеговичь вололоав",
      phone: "+79618428824",
      nickName: "oleg",
      comment: "хороший работник",
      movementType: "машина",
      rate: "потом придумаю",
      password: "123",
      passwordCheck: "123",
    },
    {
      key: "2",
      id: "321",
      status: "работает",
      fullName: "олег олеговичь вололоав",
      phone: "+79618428824",
      nickName: "oleg",
      comment: "хороший работник",
      movementType: "велосипед",
      rate: "потом придумаю",
      password: "123",
      passwordCheck: "123",
    },
  ];

  return (
    <div>
      <NavLink to="/сouriers/rates">тарифы курьеров</NavLink>
      <TableLayout<ICouriers>
        columns={columns}
        data={data}
        form={CouriersForm}
      />
    </div>
  );
}

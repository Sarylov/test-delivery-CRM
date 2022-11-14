import React from "react";
import { NavLink } from "react-router-dom";
import Table from "../components/Table/Table";
import { ICouriers } from "../models/couriers";

export default function Couriers() {
  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "ФИО", dataIndex: "fullName", key: "fullName" },
    { title: "телефон", dataIndex: "phone", key: "phone" },
    { title: "логин", dataIndex: "nickName", key: "nickName" },
    { title: "Тип транспорта", dataIndex: "movementType", key: "movementType" },
    { title: "тариф", dataIndex: "rate", key: "rate" },
    { title: "комментарий", dataIndex: "comment", key: "comment" },
    { title: "статус", dataIndex: "status", key: "status" },
  ];

  const data: ICouriers[] = [
    {
      id: "123",
      status: "активен",
      fullName: "олег олеговичь вололоав",
      phone: "+79618428824",
      nickName: "oleg",
      comment: "хороший работник",
      movementType: "машина",
      rate: "потом придумаю",
    },
  ];

  return (
    <div>
      <NavLink to="/сouriers/core">тарифы куртеров</NavLink>

      <Table columns={columns} data={data} pag={false} />
    </div>
  );
}

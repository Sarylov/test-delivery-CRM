import React from "react";
import Table from "../components/Table/Table";
import { IOrders } from "../models/orders";

export default function Orders() {
  const columns = [
    { title: "номер", dataIndex: "id", key: "id" },
    { title: "дата", dataIndex: "date", key: "date" },
    { title: "время", dataIndex: "time", key: "time" },
    { title: "организация", dataIndex: "organization", key: "organization" },
    { title: "№ заказа портнера", dataIndex: "partnerON", key: "partnerON" },
    { title: "комментарий", dataIndex: "comment", key: "comment" },
    {
      title: "расстояние в км",
      dataIndex: "distance",
      key: "distance",
      sorter: (a: IOrders, b: IOrders) => a.distance - b.distance,
    },
    {
      title: "стоймость доставки",
      dataIndex: "deliveryProce",
      key: "deliveryProce",
      sorter: (a: IOrders, b: IOrders) => a.deliveryProce - b.deliveryProce,
    },
    { title: "курьер", dataIndex: "courier", key: "courier" },
    { title: "время плановое приготовления", dataIndex: "t1", key: "t1" },
    {
      title: "время нажатия прибыл к точке подбора",
      dataIndex: "10",
      key: "10",
    },
    { title: "время нажатия забрал заказ", dataIndex: "t2", key: "t2" },
    { title: "время нажатия прибыл к клиенту", dataIndex: "t3", key: "t3" },
    { title: "время нажатия завершил заказ", dataIndex: "t4", key: "t4" },
    { title: "время  доставить до", dataIndex: "t5", key: "t5" },
    {
      title: "оплата курьеру",
      dataIndex: "courierEarned",
      key: "courierEarned",
      sorter: (a: IOrders, b: IOrders) => a.courierEarned - b.courierEarned,
    },
    {
      title: "Статус оплаты",
      dataIndex: "paymentStatues",
      key: "paymentStatues",
      filters: [
        { text: "оплачен", value: "оплачен" },
        { text: "не оплачен", value: "не оплачен" },
      ],
      filterMode: "tree",
      onFilter: (value: string, record: IOrders) =>
        record.paymentStatues.startsWith(value),
    },
    { title: "тип оплаты", dataIndex: "paymentType", key: "paymentType" },
    { title: "сумма", dataIndex: "orderPrice", key: "orderPrice" },
    { title: "доставка", dataIndex: "deliveryPrice", key: "deliveryPrice" },
  ];

  const data: IOrders[] = [
    {
      key: "123",
      id: "123",
      status: "завершон",
      date: "12.12.21",
      time: "12:12",
      partnerON: "123",
      distance: 15,
      deliveryPrice: 14,
      courier: "Владимир Владимирович",
      courierEarned: 123,
      paymentStatues: "оплачен",
      paymentType: "картой",
      deliveryProce: 12,
      orderPrice: 123,
    },
    {
      key: "321",
      id: "321",
      status: "завершон",
      date: "12.12.21",
      time: "12:12",
      partnerON: "123",
      distance: 15,
      deliveryPrice: 14,
      courier: "Владимир Владимирович",
      courierEarned: 123,
      paymentStatues: "оплачен",
      paymentType: "картой",
      deliveryProce: 12,
      orderPrice: 123,
    },
    {
      key: "124",
      id: "124",
      status: "завершон",
      date: "12.12.21",
      time: "12:12",
      partnerON: "123",
      distance: 15,
      deliveryPrice: 14,
      courier: "Владимир Владимирович",
      courierEarned: 123,
      paymentStatues: "не оплачен",
      paymentType: "картой",
      deliveryProce: 12,
      orderPrice: 123,
    },
  ];

  return (
    <div>
      <Table columns={columns} data={data} pag={true} />
    </div>
  );
}

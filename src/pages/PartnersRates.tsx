import React from "react";
import TableLayout from "../components/layout/TableTayout/TableLayout";
import Table from "../components/Table/Table";
import { IPartnersRates } from "../models/partnersRates";
import PartnersRatesForm from "../components/layout/Forms/PartnersRatesForm/PartnersRatesForm";

export default function PartnersRates() {
  const columns = [
    { title: "название", dataIndex: "name", key: "name" },
    { title: "тип", dataIndex: "type", key: "type" },
    {
      title: "строймоть забора",
      dataIndex: "takePrice",
      key: "takePrice",
      sorter: (a: IPartnersRates, b: IPartnersRates) =>
        a.takePrice - b.takePrice,
    },
    {
      title: "стоимость открузки",
      dataIndex: "shipmentPrice",
      key: "shipmentPrice",
      sorter: (a: IPartnersRates, b: IPartnersRates) =>
        a.shipmentPrice - b.shipmentPrice,
    },
    {
      title: "стоймость 1 км",
      dataIndex: "kmPrice",
      key: "kmPrice",
      sorter: (a: IPartnersRates, b: IPartnersRates) => a.kmPrice - b.kmPrice,
    },
    {
      title: "Комиссия за эквайринг(%)",
      dataIndex: "commission",
      key: "commission",
    },
    {
      title: "активность",
      dataIndex: "activity",
      key: "activity",
      filters: [
        {
          text: "включен",
          value: "включен",
        },
        {
          text: "выключен",
          value: "выключен",
        },
      ],
      filterMode: "tree",
      onFilter: (value: string, record: IPartnersRates) =>
        record.activity.startsWith(value),
    },
  ];

  const data: IPartnersRates[] = [
    {
      key: "1",
      name: "оптимальный",
      type: "ресторан",
      takePrice: 20,
      shipmentPrice: 20,
      commission: 12,
      kmPrice: 3,
      activity: "включен",
    },
  ];

  return (
    <div>
      {/* {<Table columns={columns} data={data} pag={true} />} */}
      <TableLayout<IPartnersRates>
        columns={columns}
        data={data}
        form={PartnersRatesForm}
      />
    </div>
  );
}

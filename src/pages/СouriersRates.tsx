import React from "react";
import CouriersForm from "../components/layout/Forms/CouriersForm/CouriersForm";
import TableLayout from "../components/layout/TableTayout/TableLayout";
import Table from "../components/Table/Table";
import { IСouriersRates } from "../models/couriersRates";
import { IPartnersRates } from "../models/partnersRates";

export default function СouriersRates() {
  const columns = [
    { title: "название", dataIndex: "name", key: "name" },
    { title: "тип", dataIndex: "type", key: "type" },
    {
      title: "строймоть забора",
      dataIndex: "takePrice",
      key: "takePrice",
      sorter: (a: IСouriersRates, b: IСouriersRates) =>
        a.takePrice - b.takePrice,
    },
    {
      title: "стоимость открузки",
      dataIndex: "shipmentPrice",
      key: "shipmentPrice",
      sorter: (a: IСouriersRates, b: IСouriersRates) =>
        a.shipmentPrice - b.shipmentPrice,
    },
    {
      title: "стоймость 1 км",
      dataIndex: "kmPrice",
      key: "kmPrice",
      sorter: (a: IСouriersRates, b: IСouriersRates) => a.kmPrice - b.kmPrice,
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
      onFilter: (value: string, record: IСouriersRates) =>
        record.activity.startsWith(value),
      width: "30%",
    },
  ];

  const data: IСouriersRates[] = [
    {
      key: "1",
      name: "оптимальный",
      type: "ресторан",
      takePrice: 10,
      shipmentPrice: 20,
      kmPrice: 3,
      activity: "включен",
    },
    {
      key: "2",
      name: "оптимальный",
      type: "ресторан",
      takePrice: 20,
      shipmentPrice: 30,
      kmPrice: 5,
      activity: "выключен",
    },
  ];

  return (
    <div>
      {/* {<Table columns={columns} data={data} pag={true} />} */}
      <TableLayout<IPartnersRates>
        columns={columns}
        data={data}
        form={CouriersForm}
      />
    </div>
  );
}

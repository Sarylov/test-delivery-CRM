import CouriersRatesForm from "../components/layout/Forms/СouriersRatesForm/СouriersRatesForm";
import TableLayout from "../components/layout/TableTayout/TableLayout";
import { IСouriersRates } from "../models/couriersRates";

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
    },
  ];

  const data: IСouriersRates[] = [
    {
      key: 1,
      id:1,
      name: "оптимальный",
      takePrice: 10,
      shipmentPrice: 20,
      kmPrice: 3,
      activity: "включен",
    },
    {
      key: 2,
      id:2,
      name: "оптимальный",
      takePrice: 10,
      shipmentPrice: 20,
      kmPrice: 3,
      activity: "включен",
    },
  ];

  return (
    <div>
      <TableLayout<IСouriersRates>
        columns={columns}
        data={data}
        form={CouriersRatesForm}
      />
    </div>
  );
}

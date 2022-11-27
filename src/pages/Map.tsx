import { Modal } from "antd";
import { useState } from "react";
import Map from "../components/Map/Map";
import SelectCourier from "../components/SelectCourier/SelectCourier";
import { ICouriersCordinates } from "../models/couriers";
import { ICordinatesOrders, IOrders } from "../models/orders";

export default function MapPage() {
  const [isShowCouriersWindow, setIsShowCouriersWindow] =
    useState<boolean>(false);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [selectedOrderId, setSelectedOrderId] = useState<number | null>(null);
  const [selectedCourier, setSelectedCourier] = useState<{
    id: number;
    name: string;
  } | null>(null);

  const closeCouriersWindow = () => {
    setIsShowCouriersWindow(false);
  };
  const showCouriersWindow = () => {
    setIsShowCouriersWindow(true);
  };

  const clickOrders = (id: number) => {
    showCouriersWindow();
    setSelectedOrderId(id);
  };

  const clickOk = () => {
    // логика закрепления за курьером заказа и за заказом курьера
    console.log("====================================");
    console.log(
      "id заказа: " + selectedOrderId + " id курьера " + selectedCourier?.name
    );
    console.log("====================================");
    setIsShowCouriersWindow(false);
    setIsShowModal(false);
  };

  const clickCouriers = (id: number, name: string) => {
    setSelectedCourier({ id, name });
    setIsShowModal(true);
  };

  // реализовать подгрузку с сервера с полем active: true
  const Orders: ICordinatesOrders[] = [
    {
      key: 123,
      id: 123,
      status: "активный",
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

      restPos: [46.3178, 44.2558],
      clientPos: [46.2978, 44.2578],
      color: "green", // не из базы присуждаю сам
      number: 2, // не из базы присуждаю сам
    },
    {
      key: 321,
      id: 321,
      status: "активный",
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

      restPos: [46.3058, 44.2658],
      clientPos: [46.3048, 44.2468],
      color: "red", // не из базы присуждаю сам
      number: 1, // не из базы присуждаю сам
    },
    {
      key: 124,
      id: 124,
      status: "активный",
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

      restPos: [46.3158, 44.2458],
      clientPos: [46.3148, 44.2568],
      // color: "red", // не из базы присуждаю сам
      number: 1, // не из базы присуждаю сам
    },
  ];
  // реализовать подгрузку с сервера с полем active: true
  const Couriers: ICouriersCordinates[] = [
    {
      key: 1,
      id: 312,
      active: "на линии",
      status: "работает",
      fullName: "олег олеговичь вололоав",
      phone: "+79618428824",
      nickName: "oleg",
      comment: "хороший работник",
      movementType: "велосипед",
      rate: "потом придумаю",
      password: "123",
      passwordCheck: "123",

      position: [46.3018, 44.2518],
      color: "green",
    },
    {
      key: 2,
      id: 321,
      active: "на линии",
      status: "работает",
      fullName: "олег олеговичь вололоав",
      phone: "+79618428824",
      nickName: "oleg",
      comment: "хороший работник",
      movementType: "машина",
      rate: "потом придумаю",
      password: "123",
      passwordCheck: "123",

      position: [46.3068, 44.2588],
      color: "red",
    },
  ];

  return (
    <div className="map-page">
      <Map Orders={Orders} Couriers={Couriers} clickOrders={clickOrders} />

      {isShowCouriersWindow && (
        <SelectCourier
          clickCouriers={clickCouriers}
          clickClose={closeCouriersWindow}
          Couriers={Couriers}
          className="window-select-courier"
        />
      )}

      <Modal
        title="закрепить"
        open={isShowModal}
        maskClosable={true}
        onCancel={() => setIsShowModal(false)}
        onOk={clickOk}
        cancelText="отмена"
        okText="закрепить"
        // cancelButtonProps={{ style: { display: "none" } }}
        // okButtonProps={{ style: { display: "none" } }}
      >
        Заказ №{selectedOrderId} закрепить за курьером:{" "}
        <span style={{ textTransform: "capitalize" }}>
          {selectedCourier?.name}
        </span>
      </Modal>
    </div>
  );
}

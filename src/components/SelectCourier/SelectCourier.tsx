import React, { FC } from "react";
import { SelectCourierProps } from "./SelectCourier.props";
import "./SelectCourier.module.css";
import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import Couriers from "./../../pages/Сouriers";

const SelectCourier: FC<SelectCourierProps> = ({
  Couriers,
  clickClose,
  clickCouriers,
  ...props
}) => {
  return (
    <div {...props}>
      <div className="items-wrapper">
        <Button
          type="link"
          onClick={clickClose}
          className="close-window-courier"
        >
          <CloseOutlined style={{ fontSize: "1.4rem" }} />
        </Button>
        {Couriers.map((c) => {
          return (
            <div
              onClick={() => {
                clickCouriers(c.id, c.fullName);
              }}
              className="window-select-courier__items"
            >
              <div className="courier__items-info">
                <h3>{c.fullName}</h3>
                <p>тип передвижения: {c.movementType}</p>
              </div>
              <div
                className="color-courier"
                style={{ backgroundColor: c.color }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectCourier;

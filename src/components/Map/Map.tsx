import React, { FC } from "react";
import { MapProps } from "./Map.props";
import "./Map.module.css";

import { YMaps, Map } from "react-yandex-maps";
import MarkerOrder from "../MarkerOrder/MarkerOrder";
// import MarkerCouriers from "../MarkerCouriers/MarkerCouriers";
import MarkerLine from "../MarkerLine/MarkerLine";
import MarkerCouriers from "../MarkerCouriers/MarkerCouriers";

const MapCompanent: FC<MapProps> = ({
  Orders,
  Couriers,
  clickOrders,
  ...props
}) => {
  return (
    <div className="map-wrapper" {...props}>
      <YMaps query={{ lang: "ru_RU" }}>
        <Map
          height="100vh"
          width="100%"
          defaultState={{
            center: [46.3078, 44.2558],
            zoom: 14,
            controls: ["zoomControl"],
          }}
          modules={["control.ZoomControl"]}
        >
          {/* отрисовка заказов */}
          {Orders.map((o) => {
            return (
              <>
                <MarkerOrder
                  id={o.id}
                  key={String(o.key)}
                  type={"square"}
                  time={o.time}
                  number={o.number}
                  color={o.color}
                  position={o.restPos}
                  click={() => clickOrders(o.id)}
                />
                <MarkerOrder
                  id={o.id}
                  key={String(o.key) + 1}
                  type={"circle"}
                  time={o.time}
                  number={o.number}
                  color={o.color}
                  position={o.clientPos}
                  click={() => clickOrders(o.id)}
                />
                <MarkerLine
                  color={o.color}
                  start={o.restPos}
                  end={o.clientPos}
                />
              </>
            );
          })}
          {/* отрисовка курьеров */}
          {Couriers.map((c) => {
            interface ITypeMovement {
              велосипед: "bike" | "car" | "pedestrian";
              машина: "bike" | "car" | "pedestrian";
              пешком: "bike" | "car" | "pedestrian";
            }
            const dictionary: ITypeMovement = {
              велосипед: "bike",
              машина: "car",
              пешком: "pedestrian",
            };

            return (
              <MarkerCouriers
                type={dictionary[c.movementType]}
                postion={c.position}
                color={c.color}
                name={c.fullName}
              />
            );
          })}
        </Map>
      </YMaps>
    </div>
  );
};

export default MapCompanent;

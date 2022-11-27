import React, { FC } from "react";
import { MarkerCouriersProps } from "./MarkerCouriers.props";
import "./MarkerCouriers.module.css";
import { Placemark } from "react-yandex-maps";

const MarkerCouriers: FC<MarkerCouriersProps> = ({
  type,
  color,
  postion,
  name,
  ...props
}) => {
  const icons = {
    car: "islands#blueAutoIcon",
    bike: "islands#blueBicycleIcon",
    pedestrian: "islands#blueRunIcon",
  };
  return (
    <div {...props}>
      <Placemark
        defaultGeometry={postion}
        modules={["geoObject.addon.balloon"]}
        options={{
          preset: icons[type],
          iconColor: color,
        }}
        properties={{
          iconContent: "3000",
          balloonContentBody: name,
          hideIconOnBalloonOpen: false,
        }}
      />
    </div>
  );
};

export default MarkerCouriers;

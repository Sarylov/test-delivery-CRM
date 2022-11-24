import React, { FC } from "react";
import { MarkerOrderProps } from "./MarkerOrder.props";
import "./MarkerOrder.module.css";
import { Placemark, withYMaps } from "react-yandex-maps";

const MarkerComponent = (props: any) => {
  const { ymaps, marker } = props;
  const clickMarker = () => {
    console.log(marker.time);
  };

  const template = ymaps.templateLayoutFactory.createClass(
    `<div class="placemark placemark-${marker.type}">${marker.number}
          <div class="time">${marker.time}</div>    
          </div>
          <style>
            .placemark{
                border-color:${marker.color};
            }
            .time{
                border-color:${marker.color};
            }
          </style>
          `,
    {
      build: function () {
        template.superclass.build.call(this);
        // <Тут JS>
        this.getData().geoObject.events.add("click", clickMarker, this);

        this.getData().options.set("shape", {
          type: "Circle",
          coordinates: [0, 0],
          radius: 10,
        });
      },
    }
  );
  return (
    <Placemark
      defaultGeometry={marker.position}
      options={{
        iconLayout: template,
      }}
    />
  );
};

const MarkerOrder: FC<MarkerOrderProps> = ({
  type,
  color = "#333333",
  time,
  number,
  position,
  ...props
}) => {
  const Marker = withYMaps(MarkerComponent, true, ["templateLayoutFactory"]);

  return (
    <div {...props}>
      <Marker marker={{ time, type, color, number, position }} />
    </div>
  );
};

export default MarkerOrder;

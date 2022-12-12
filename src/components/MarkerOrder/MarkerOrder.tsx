import React, { FC } from "react";
import { MarkerOrderProps } from "./MarkerOrder.props";
import "./MarkerOrder.module.css";
import { Placemark, withYMaps } from "react-yandex-maps";

const MarkerComponent = (props: any) => {
  const { ymaps, marker } = props;
  const clickMarker = () => {
    marker.click();
  };

  const template = ymaps.templateLayoutFactory.createClass(
    `<div id="marker${marker.id}" class="placemark placemark-${marker.type}">${marker.number}
          <div class="time">${marker.time}</div>    
          </div>
          <style>
            #marker${marker.id}{
                border-color:${marker.color};
            }

            #marker${marker.id} .time{
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
          type: "Rectangle",
          coordinates: [
            [-10, -30],
            [30, 10],
          ],

          // radius: 10,
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
  color = "#A0A0A0",
  time,
  number,
  position,
  click,
  id,
  ...props
}) => {
  const Marker = withYMaps(MarkerComponent, true, ["templateLayoutFactory"]);

  return (
    <div {...props}>
      <Marker marker={{ time, type, color, number, position, click, id }} />
    </div>
  );
};

export default MarkerOrder;

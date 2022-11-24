import React, { FC } from "react";
import { MapProps } from "./Map.props";
import "./Map.module.css";

import { YMaps, Map } from "react-yandex-maps";
import MarkerOrder from "../MarkerOrder/MarkerOrder";
import MarkerCouriers from "../MarkerCouriers/MarkerCouriers";

const MapCompanent: FC<MapProps> = ({ ...props }) => {
  return (
    <div className="map-wrapper" {...props}>
      <YMaps query={{ lang: "ru_RU" }}>
        <Map
          height="100vh"
          width="100%"
          defaultState={{
            center: [46.3078, 44.2558],
            zoom: 14,
            controls: ["zoomControl", "fullscreenControl"],
          }}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
        >
          <MarkerOrder
            type={"square"}
            time={"10:20"}
            number={3}
            color={"green"}
            position={[46.3078, 44.2558]}
          />
          <MarkerOrder
            type={"circle"}
            time={"10:20"}
            number={3}
            color={"green"}
            position={[46.3158, 44.2598]}
          />
          <MarkerCouriers
            type={"car"}
            postion={[46.3228, 44.2598]}
            color={"red"}
          />
        </Map>
      </YMaps>
    </div>
  );
};

export default MapCompanent;

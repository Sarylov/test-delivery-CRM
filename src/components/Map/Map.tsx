import React, { FC } from "react";
import { MapProps } from "./Map.props";
import "./Map.module.css";

import { YMaps, Map as MapL, Placemark } from "react-yandex-maps";

const Map: FC<MapProps> = ({ ...props }) => {
  return (
    <div className="map-wrapper" {...props}>
      <YMaps query={{ lang: "ru_RU" }}>
        <MapL
          height="100vh"
          width="100%"
          defaultState={{
            center: [46.3078, 44.2558],
            zoom: 14,
            controls: ["zoomControl", "fullscreenControl"],
          }}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
        >
          <Placemark defaultGeometry={[46.3078, 44.2558]} />
        </MapL>
      </YMaps>
    </div>
  );
};

export default Map;

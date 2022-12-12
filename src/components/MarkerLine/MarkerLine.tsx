import React, { FC } from "react";
import { MarkerLineProps } from "./MarkerLine.props";
import "./MarkerLine.module.css";
import { Polyline } from "react-yandex-maps";

interface IColors {
  [index: string]: string;
}

const MarkerLine: FC<MarkerLineProps> = ({
  color = "#A0A0A0",
  start,
  end,
  ...props
}) => {
  const colors: IColors = {
    red: "#F5222D",
    volcano: "#FA541C",
    orange: "#FA8C16",
    gold: "#FAAD14",
    yellow: "#FADB14",
    lime: "#A0D911",
    green: "#52C41A",
    cyan: "#13C2C2",
    blue: "#1890FF",
    geekblue: "#2F54EB",
    purple: "#722ED1",
    magenta: "#EB2F96",
    grey: "#666666",
  };

  return (
    <div {...props}>
      <Polyline
        geometry={[start, end]}
        options={{
          balloonCloseButton: false,
          strokeColor: colors[color] ? colors[color] : color,
          strokeWidth: 3,
          strokeOpacity: 1,
        }}
      />
    </div>
  );
};

export default MarkerLine;


    import React, { FC } from "react";
    import { MarkerLineProps } from "./MarkerLine.props";
    import "./MarkerLine.module.css";

    const MarkerLine: FC<MarkerLineProps> = ({...props }) => {
    return (
        <div {...props}>
        </div>
     );
    };

    export default MarkerLine;
    
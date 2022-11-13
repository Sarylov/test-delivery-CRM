import React, { FC } from "react";
import { HtagProps } from "./Htag.props";
import "./Htag.module.css";

const Htag: FC<HtagProps> = ({ tag = "h1", children, ...props }) => {
  return (
    <div {...props}>
      {tag === "h1" && <h1>{children}</h1>}
      {tag === "h2" && <h2>{children}</h2>}
      {tag === "h3" && <h3>{children}</h3>}
    </div>
  );
};

export default Htag;

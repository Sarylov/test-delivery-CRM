import React from "react";
import { HtagProps } from "./Htag.props";

export default function Htag({ tag = "h1", children }: HtagProps): JSX.Element {
  return (
    <div>
      {tag == "h1" && <h1>{children}</h1>}
      {tag == "h2" && <h2>{children}</h2>}
      {tag == "h3" && <h3>{children}</h3>}
    </div>
  );
}

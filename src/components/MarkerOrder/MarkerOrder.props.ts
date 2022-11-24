import { ReactNode } from "react";

export interface MarkerOrderProps extends React.HTMLAttributes<HTMLElement> {
  // children: ReactNode;
  type: "circle" | "square";
  color?: string;
  time: string;
  number:number;
  position:[number, number]
}

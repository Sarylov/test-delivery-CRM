import { ReactNode } from "react";

export interface MarkerCouriersProps extends React.HTMLAttributes<HTMLElement> {
  type: "car" | "bike" | "pedestrian";
  postion: [number, number];
  color: string;
}

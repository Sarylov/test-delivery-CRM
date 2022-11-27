import { ReactNode } from "react";

export interface MarkerOrderProps {
  // children: ReactNode;
  id: number;
  type: "circle" | "square";
  color?: string;
  time: string;
  number: number;
  position: [number, number];
  click: () => void;
}

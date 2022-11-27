import { ReactNode } from "react";

export interface MarkerLineProps extends React.HTMLAttributes<HTMLElement> {
  // children: ReactNode;
  color?: string;
  start: [number, number];
  end: [number, number];
}

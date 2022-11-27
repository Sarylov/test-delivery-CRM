import { ReactNode } from "react";
import { ICouriersCordinates } from "../../models/couriers";

export interface SelectCourierProps extends React.HTMLAttributes<HTMLElement> {
  // children: ReactNode;
  Couriers: ICouriersCordinates[];
  clickClose: () => void;
  clickCouriers: (id: number, name: string) => void;
}

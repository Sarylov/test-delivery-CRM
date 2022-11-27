import { ReactNode } from "react";
import { ICouriersCordinates } from "../../models/couriers";
import { ICordinatesOrders } from "../../models/orders";

export interface MapProps extends React.HTMLAttributes<HTMLElement> {
  // children: ReactNode;
  clickOrders: (id: number) => void;
  Orders: ICordinatesOrders[];
  Couriers: ICouriersCordinates[];
}

import { iForm } from "../../../../models/form";
import { ICouriers } from "./../../../../models/couriers";

export interface CouriersFormProps
  extends React.HTMLAttributes<HTMLElement>,
    iForm {
  couriers?: ICouriers;
}

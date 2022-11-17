import { FC, ReactNode } from "react";
import { iForm } from "../../../models/form";
import { TableProps } from "../../Table/Table.props";

export interface TableLayoutProps
  extends React.HTMLAttributes<HTMLElement>,
    TableProps {
  form: FC<iForm>;
}

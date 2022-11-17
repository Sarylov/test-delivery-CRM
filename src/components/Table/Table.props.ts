import { ReactNode } from "react";

export interface TableProps extends React.HTMLAttributes<HTMLElement> {
  // children: ReactNode;
  columns: { title: string; dataIndex: string; key: string }[];
  data: any[];
  pag?: boolean;
  clickRow?: (props: any) => void;
}

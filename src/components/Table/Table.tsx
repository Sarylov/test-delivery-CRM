import React, { FC } from "react";
import { TableProps } from "./Table.props";
import "./Table.module.css";

import {
  Row,
  Col,
  Card,
  Radio,
  Table as TableAD,
  message,
  Button,
  Avatar,
  Typography,
} from "antd";

// Images

const Table: FC<TableProps> = ({ columns, data, pag = false, ...props }) => {
  return (
    <div {...props} className="table-responsive">
      <TableAD
        columns={columns}
        dataSource={data}
        pagination={pag && { position: ["bottomCenter"] }}
        className="table-responsive"
        bordered={true}
        // scroll={{ x: true }}
      />
    </div>
  );
};

export default Table;

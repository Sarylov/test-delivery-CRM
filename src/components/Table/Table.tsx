import React, { FC } from "react";
import { TableProps } from "./Table.props";
import "./Table.module.css";

import { Table as TableAD } from "antd";

// Images

const Table: FC<TableProps> = ({ columns, data, pag, clickRow, ...props }) => {
  return (
    <div {...props} className="table-responsive">
      <TableAD
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              clickRow && clickRow(record);
            }, // click row
          };
        }}
        columns={columns}
        dataSource={data}
        pagination={pag && { position: ["bottomCenter"] }}
        className="table-responsive"
        bordered={true}
      />
    </div>
  );
};

export default Table;

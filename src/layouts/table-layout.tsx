import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'

interface ITableLayout {
  clickOnCell?: (record: any) => void
  dataForTable: any
  columns: any
}

export const TableLayout: React.FC<ITableLayout> = ({
  clickOnCell,
  columns,
  dataForTable,
}) => {
  return (
    <Table
      scroll={{ x: true }}
      onRow={(record, rowIndex) => {
        return {
          onClick: () => {
            clickOnCell && clickOnCell(record)
          },
        }
      }}
      columns={columns}
      dataSource={dataForTable}
    />
  )
}

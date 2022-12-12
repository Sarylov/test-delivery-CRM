import { TableLayout } from './table-layout'

interface ITableWithFormLayout {
  formName: 'couriers' | 'partners'
  dataForTable: any
  columns: any
}

// const formNames = {
//   couriers: cou
// }

export const TableWithFormLayout: React.FC<ITableWithFormLayout> = ({
  columns,
  dataForTable,
  formName,
}) => {
  const clickOnCell = (records: any) => {
    console.log('====================================')
    console.log(records)
    console.log('====================================')
  }

  return (
    <TableLayout
      clickOnCell={clickOnCell}
      columns={columns}
      dataForTable={dataForTable}
    />
  )
}

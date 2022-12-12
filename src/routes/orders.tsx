import { ordersColumns } from '@/helpers/columns-for-table/orders-columns'
import { TableLayout } from '@/layouts/table-layout'

export const Orders: React.FC = () => {
  return <TableLayout columns={ordersColumns} dataForTable={undefined} />
}

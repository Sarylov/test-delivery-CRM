import { couriersColumns } from '@/helpers/columns-for-table/couriers-columns'
import { TableWithFormLayout } from './../layouts/table-with-form-layout'

const data = [
  {
    key: 1,
    id: 312,
    active: 'на линии',
    status: 'работает',
    fullName: 'олег олеговичь вололоав',
    phone: '+79618428824',
    nickName: 'oleg',
    comment: 'хороший работник',
    movementType: 'велосипед',
    rate: 'потом придумаю',
    password: '123',
    passwordCheck: '123',
  },
]

export const Couriers: React.FC = () => {
  return (
    <TableWithFormLayout
      formName={'couriers'}
      columns={couriersColumns}
      dataForTable={data}
    />
  )
}

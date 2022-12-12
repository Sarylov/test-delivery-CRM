export const couriersColumns = [
  { title: 'ID', dataIndex: 'id', key: 'id' },
  { title: 'ФИО', dataIndex: 'fullName', key: 'fullName' },
  { title: 'телефон', dataIndex: 'phone', key: 'phone' },
  { title: 'логин', dataIndex: 'nickName', key: 'nickName' },
  {
    title: 'Тип передвижения',
    dataIndex: 'movementType',
    key: 'movementType',
    filters: [
      { text: 'машина', value: 'машина' },
      { text: 'велосипед', value: 'велосипед' },
      { text: 'пешком', value: 'пешком' },
    ],
    filterMode: 'tree',
    onFilter: (value: string, record: any) =>
      record.movementType.includes(value),
  },
  { title: 'тариф', dataIndex: 'rate', key: 'rate' },
  { title: 'комментарий', dataIndex: 'comment', key: 'comment' },
  {
    title: 'статус',
    dataIndex: 'status',
    key: 'status',
    filters: [
      { text: 'работает', value: 'работает' },
      { text: 'не работает', value: 'не работает' },
    ],
    filterMode: 'tree',
    onFilter: (value: string, record: any) => record.status.startsWith(value),
  },
]

import { createBrowserRouter } from 'react-router-dom'
import { Root } from './root'
import { Monitoring } from './monitoring'
import { Login } from './login'
import { Orders } from './orders'
import { Couriers } from './couriers'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'monitoring',
        element: <Monitoring />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
      {
        path: 'couriers',
        element: <Couriers />,
      },
      {
        path: 'partners',
        element: <div>Partners</div>,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
])

export default router

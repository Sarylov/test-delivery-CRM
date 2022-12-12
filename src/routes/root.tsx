import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Divider, Menu, Modal } from 'antd'
import {
  ShopOutlined,
  LogoutOutlined,
  EnvironmentOutlined,
  FileDoneOutlined,
  CarOutlined,
  WarningTwoTone,
} from '@ant-design/icons'
// import { useAuth } from '@/hooks/use-auth'
import { useSideMenu } from '@/hooks/use-side-menu'
import { RootLayout } from '@/layouts/root-layout'

const logoutConfirm = (onConfirm: () => void) => () => {
  Modal.confirm({
    title: 'Выход из системы',
    icon: <WarningTwoTone twoToneColor="#ff4d4f" />,
    content: 'Вы уверены?',
    okText: 'Выйти',
    okButtonProps: {
      danger: true,
    },
    onOk: onConfirm,
    cancelText: 'Отмена',
  })
}

export const Root: React.FC = () => {
  // const { logout } = useAuth()
  const navigate = useNavigate()
  const { collapsed, switchCollapsed, getCollapseIcon } = useSideMenu()

  return (
    <RootLayout
      collapsed={collapsed}
      siderContent={
        <React.Fragment>
          <Menu
            mode="inline"
            selectable={false}
            onClick={switchCollapsed}
            items={[
              {
                key: 'collapse',
                label: collapsed ? 'Развернуть' : 'Свернуть',
                icon: getCollapseIcon(collapsed),
              },
            ]}
          />
          <Menu
            mode="inline"
            defaultSelectedKeys={['monitoring']}
            onClick={({ key }) => navigate(`/${key}`)}
            items={[
              {
                key: 'monitoring',
                label: 'Мониторинг',
                icon: <EnvironmentOutlined />,
              },
              {
                key: 'orders',
                label: 'Заказы',
                icon: <FileDoneOutlined />,
              },
              {
                key: 'couriers',
                label: 'Курьеры',
                icon: <CarOutlined />,
              },
              {
                key: 'partners',
                label: 'Партнёры',
                icon: <ShopOutlined />,
              },
            ]}
          />
          <Divider />
          <Menu
            mode="inline"
            selectable={false}
            // onClick={logoutConfirm(logout)}
            items={[
              {
                key: 'logout',
                label: 'Выход',
                icon: <LogoutOutlined />,
                danger: true,
              },
            ]}
          />
        </React.Fragment>
      }
    />
  )
}

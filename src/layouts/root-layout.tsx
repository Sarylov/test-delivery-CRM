import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import { SiderTheme } from 'antd/lib/layout/Sider'

const { Content, Sider } = Layout

interface IRootLayout {
  collapsed: boolean
  theme?: SiderTheme
  siderContent?: JSX.Element
}

export const RootLayout: React.FC<IRootLayout> = ({
  collapsed,
  theme = 'light',
  siderContent,
}) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider theme={theme} trigger={null} collapsible collapsed={collapsed}>
        {siderContent}
      </Sider>
      <Layout>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

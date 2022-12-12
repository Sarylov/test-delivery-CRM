import React from 'react'
import { Divider, Layout, Spin, Typography } from 'antd'

const { Content } = Layout
const { Title } = Typography

const centeredFlex = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

interface ILoginPageLayout {
  loginFormComponent: JSX.Element
  isLoading?: boolean
}

export const LoginPageLayout: React.FC<ILoginPageLayout> = ({
  loginFormComponent,
  isLoading = false,
}) => {
  return (
    <Spin spinning={isLoading} size="large">
      <Layout
        style={{
          ...centeredFlex,
          minHeight: '100vh',
          padding: 16,
        }}
      >
        <Content>
          <Title level={1} style={{ fontSize: 32, textAlign: 'center' }}>
            Вход
          </Title>
          <Divider dashed />
          {loginFormComponent}
        </Content>
      </Layout>
    </Spin>
  )
}

import React, { ChangeEventHandler } from 'react'
import { Button, Divider, Form, Input } from 'antd'
import { LoginOutlined } from '@ant-design/icons'
import { TLoginParams } from '@/types'

interface ILoginForm {
  onFinish: (loginParams: TLoginParams) => void
  onFinishFailed?: () => void
}

const loginClearHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
  if (!event?.target?.value) {
    localStorage.removeItem('last_login')
  }
}

export const LoginForm: React.FC<ILoginForm> = ({
  onFinish,
  onFinishFailed,
}) => {
  return (
    <Form
      name="login-form"
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={{
        minWidth: 280,
      }}
    >
      <Form.Item
        label="Логин"
        name="login"
        rules={[
          {
            required: true,
            message: 'Введите логин!',
          },
        ]}
      >
        <Input size="large" onChange={loginClearHandler} allowClear />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[
          {
            required: true,
            message: 'Введите пароль!',
          },
        ]}
      >
        <Input.Password size="large" allowClear />
      </Form.Item>
      <Divider dashed />
      <Form.Item>
        <Button
          type="primary"
          size="large"
          htmlType="submit"
          block
          icon={<LoginOutlined />}
        >
          Войти
        </Button>
      </Form.Item>
    </Form>
  )
}

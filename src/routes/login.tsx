import React from 'react'
import { useMutation } from '@apollo/client'
import { LoginForm } from '@/components/login-form'
import { LoginPageLayout } from '@/layouts/login-page-layout'
import { LOGIN } from '@/graphql/queries'
import { useAuth } from '@/hooks/use-auth'
import { TLoginParams } from '@/types'

export const Login: React.FC = () => {
  const { redirect } = useAuth()
  const [getToken, { loading }] = useMutation(LOGIN)

  const onLogin = ({ login, password }: TLoginParams) => {
    getToken({ variables: { login, password } })
      .then(({ data }) => {
        localStorage.setItem('token', data?.login?.access_token)
        redirect('/monitoring')
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <LoginPageLayout
      isLoading={loading}
      loginFormComponent={<LoginForm onFinish={onLogin} />}
    />
  )
}

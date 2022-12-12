import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import client from '@/graphql/client'
import { logoutHelper } from '@/helpers/auth'

const LOGIN_PAGE_PATH = '/login'

export const useAuth = () => {
  const navigate = useNavigate()
  const location = useLocation()

  function redirect(to: string): void {
    navigate(to, { replace: true, state: { from: location } })
  }

  function logout() {
    logoutHelper(client.resetStore)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (!token) {
      redirect(LOGIN_PAGE_PATH)
    }
  }, [])

  return { redirect, logout }
}

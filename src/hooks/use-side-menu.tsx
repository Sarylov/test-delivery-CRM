import React, { useEffect, useState } from 'react'
import { DoubleRightOutlined, DoubleLeftOutlined } from '@ant-design/icons'

const MENU_STATE_LS_KEY = 'menu_collapsed'

const getCollapseIcon = (collapsed: boolean): JSX.Element =>
  collapsed ? <DoubleRightOutlined /> : <DoubleLeftOutlined />

const getStateFromLocalStorage = (): boolean =>
  JSON.parse(localStorage.getItem(MENU_STATE_LS_KEY) || 'false')

export const useSideMenu = () => {
  const [collapsed, setCollapsed] = useState(getStateFromLocalStorage())

  function switchCollapsed() {
    setCollapsed(!collapsed)
  }

  useEffect(() => {
    localStorage.setItem(MENU_STATE_LS_KEY, JSON.stringify(collapsed))
  }, [collapsed])

  return {
    collapsed,
    switchCollapsed,
    getCollapseIcon,
  }
}

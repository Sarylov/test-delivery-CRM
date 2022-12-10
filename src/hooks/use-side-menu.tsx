import { useState } from "react";
import { DoubleRightOutlined, DoubleLeftOutlined } from "@ant-design/icons";

const SIDE_MENU_KEY = "side-menu";

const getStateFromLocalStorage = (): boolean =>
  JSON.parse(localStorage.getItem(SIDE_MENU_KEY) || "false");

const getCollapsedIcons = (collapsed: boolean): JSX.Element =>
  collapsed ? <DoubleRightOutlined /> : <DoubleLeftOutlined />;

export const useSideMenu = () => {
  const [collapsed, setCollapsed] = useState(getStateFromLocalStorage());

  const switchCollapsed = () => {
    setCollapsed((prev) => !prev);
  };

  return {
    collapsed,
    switchCollapsed,
    getCollapsedIcons,
  };
};

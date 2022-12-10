import React from "react";
import RootLayout from "../layouts/root-layout";
import { Menu } from "antd";
import { useSideMenu } from "./../hooks/use-side-menu";
import { useNavigate } from "react-router-dom";
import {
  EnvironmentOutlined,
  FileDoneOutlined,
  CarOutlined,
  ShopOutlined,
} from "@ant-design/icons";

const Root = (): JSX.Element => {
  const { collapsed, switchCollapsed, getCollapsedIcons } = useSideMenu();
  const navigate = useNavigate();

  return (
    <RootLayout
      collapsed={collapsed}
      siderContent={
        <React.Fragment>
          <Menu
            onClick={switchCollapsed}
            items={[
              {
                key: "collapse",
                label: collapsed ? "развернуть" : " свернуть",
                icon: getCollapsedIcons(collapsed),
              },
            ]}
          />
          <Menu
            onClick={({ key }) => {
              navigate(`/${key}`);
            }}
            items={[
              {
                key: "monitoring",
                label: "мониторинг",
                icon: <EnvironmentOutlined />,
              },
              {
                key: "orders",
                label: "заказы",
                icon: <FileDoneOutlined />,
              },
              {
                key: "couriers",
                label: "курьеры",
                icon: <CarOutlined />,
              },
              {
                key: "partners",
                label: "партнеры",
                icon: <ShopOutlined />,
              },
            ]}
          />
        </React.Fragment>
      }
    />
  );
};

export default Root;

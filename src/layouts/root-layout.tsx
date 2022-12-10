import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

const { Sider, Content } = Layout;

interface IRootLayout {
  collapsed: boolean;
  siderContent: JSX.Element;
}

const RootLayout: React.FC<IRootLayout> = ({ collapsed, siderContent }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
        {siderContent}
      </Sider>
      <Layout>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default RootLayout;

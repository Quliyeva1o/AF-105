import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useState } from "react";
import MyContent from "./MyContent";


const Task = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuId, setSelectedMenuId] = useState("1");
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            onClick={(e) => {
              setSelectedMenuId(e.key);
            }}
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "Home",
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "Sliders",
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: "Movies",
              },
            ]}
          />
        </Layout.Sider>
        <Layout>
          <Layout.Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Layout.Header>
          <Layout.Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <MyContent id={selectedMenuId}/>
          </Layout.Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Task;

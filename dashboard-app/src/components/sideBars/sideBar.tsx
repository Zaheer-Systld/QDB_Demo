import { Button, Flex, Image, Layout, Menu } from "antd";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useUser } from "../../hooks/useUser.ts";
import { getSelectedKeyFromPath } from "../../utils/route.utils.ts";
import items from "../../constants/menuItems.tsx";
import APP_IMAGES from "../../assets/images/index.ts";
import UserAvatarInfo from "../userAvatarInfo.tsx";
const { Sider } = Layout;

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const selectedKey = getSelectedKeyFromPath(location.pathname);

  const { user } = useUser();
  return (
    <Sider
      width={250}
      style={{ background: "#fff", borderRight: "1px solid #eee" }}
      collapsed={collapsed}
    >
      <div>
        <Flex
          align='center'
          style={{
            height: "100%",
            backgroundColor: "#1677FF",
            marginBottom: "20px",
            justifyContent: !collapsed ? "space-between" : "center",
            borderRadius: "5px 5px 5px 5px",
          }}
        >
          {!collapsed && (
            <Image
              preview={false}
              width={120}
              src={APP_IMAGES.logo}
              alt='Logo'
              style={{ margin: "10px" }}
            />
          )}
          <Button
            type='text'
            icon={
              collapsed ? (
                <MenuUnfoldOutlined style={{ fontSize: "24px" }} />
              ) : (
                <MenuFoldOutlined style={{ fontSize: "24px" }} />
              )
            }
            onClick={() => setCollapsed(!collapsed)}
            style={{
              width: 48,
              height: 48,
              color: "#fff",
              alignSelf: "center",
            }}
          />
        </Flex>
        {!collapsed && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "center",
              textAlign: "center",
              justifyContent: "center",
              marginBottom: "30px",
            }}
          >
            <UserAvatarInfo user={user} />
          </div>
        )}
        <div>
          <Menu
            mode='inline'
            defaultSelectedKeys={[selectedKey]}
            selectedKeys={[selectedKey]}
            items={items}
            defaultOpenKeys={["reports"]}
          />
        </div>
      </div>
    </Sider>
  );
};

export default Sidebar;

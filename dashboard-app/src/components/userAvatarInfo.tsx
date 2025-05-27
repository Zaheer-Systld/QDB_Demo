import React from "react";
import { Avatar, Typography, Button, Spin } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

interface UserInfoProps {
  user?: {
    name: string;
    email: string;
  };
}

const UserAvatarInfo: React.FC<UserInfoProps> = ({ user }) => {
  if (!user) {
    return <Spin style={{ marginTop: 10 }} />;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Avatar size={64} icon={<UserOutlined />} />
      {user && (
        <>
          <Title level={4} style={{ margin: "10px 0 0" }}>
            {user.name}
          </Title>
          <Text type="secondary">{user.email}</Text>
          <Button
            type="primary"
            icon={<UserOutlined />}
            style={{ marginTop: 10, width: 200, alignSelf: "center" }}
          >
            Live metrics
          </Button>
        </>
      )}
    </div>
  );
};

export default UserAvatarInfo;

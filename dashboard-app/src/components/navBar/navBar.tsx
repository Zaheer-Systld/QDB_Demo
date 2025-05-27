import { Avatar, Input, Space } from "antd";
import {
  PlusOutlined,
  BellOutlined,
  CalendarOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import React from "react";
import { useSearch } from "../../context/searchContex.tsx";

const NavBar: React.FC = () => {
  const { setSearchTerm } = useSearch();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      <Input.Search
        placeholder='Type here to search...'
        style={{ width: 300, justifyItems: "center" }}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Space size='middle'>
        <PlusOutlined style={{ fontSize: 18 }} />
        <CalendarOutlined style={{ fontSize: 18 }} />
        <BellOutlined style={{ fontSize: 18 }} />
        <QuestionCircleOutlined style={{ fontSize: 18 }} />
        <Avatar src='https://randomuser.me/api/portraits/women/44.jpg' />
      </Space>
    </div>
  );
};

export default NavBar;

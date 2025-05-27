import React from "react";
import { Avatar, Button, Space, Typography, Row, Col } from "antd";
import { BoldOutlined, FilterOutlined } from "@ant-design/icons";

const { Text } = Typography;

const BlogHeader: React.FC = () => {
  return (
    <Row
      justify='space-between'
      align='middle'
      style={{
        padding: "8px 12px",
        borderRadius: 4,
      }}
    >
      <Col>
        <Space align='center'>
          <Avatar
            size='large'
            shape='square'
            style={{ backgroundColor: "#1890ff", fontWeight: "bold" }}
            icon={<BoldOutlined  />}
          />

          <div>
            <Text
              strong
              style={{ fontSize: 16 }}
            >
              All Blog Posts
            </Text>
            <br />
            <Text
              type='secondary'
              style={{ fontSize: 12 }}
            >
              Qatar Development Bank
            </Text>
          </div>
        </Space>
      </Col>
      <Col>
        <Button
          icon={<FilterOutlined />}
          size='small'
        >
          Filter/Sort by
        </Button>
      </Col>
    </Row>
  );
};

export default BlogHeader;

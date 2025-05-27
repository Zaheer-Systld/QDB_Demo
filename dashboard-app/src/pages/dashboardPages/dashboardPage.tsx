import React, { useEffect, useState } from 'react';
import { List, Avatar, Typography, Alert, Skeleton } from 'antd';
import { fetchAllUsers } from '../../api/services.ts';
import { User } from '../../types/types';


const { Title, Text } = Typography;

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAllUsers()
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load users');
        setLoading(false);
      });
  }, []);

  if (loading) return <Skeleton active/>;

  if (error) return <Alert type="error" message={error} />;

  return (
    <div style={{ padding: 20 }}>
      <Title level={2}>Dashboard - All Users</Title>
      <List
        itemLayout="horizontal"
        dataSource={users}
        renderItem={(user) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar>{user.name.charAt(0).toUpperCase()}</Avatar>}
              title={user.name}
              description={<Text type="secondary">{user.email}</Text>}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Dashboard;

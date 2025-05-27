import React from "react";
import { List, Typography, Skeleton, Image, Flex } from "antd";
import styled from "styled-components";
import { Post } from "../../types/types";

const { Title, Paragraph, Text, Link } = Typography;

interface BlogListProps {
  loading: boolean;
  posts: Post[];
  onReadMore: (postId: number) => void;
}

const BlogListWrapper = styled.div`
  padding: 20px;
`;

const ListItemContent = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 10px;
`;

const BlogText = styled.div`
  flex: 1;
`;

const BlogList: React.FC<BlogListProps> = ({ loading, posts, onReadMore }) => {
  return (
    <BlogListWrapper>
      <List
        itemLayout='vertical'
        size='large'
        loading={loading}
        dataSource={posts}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <Skeleton
              loading={loading}
              active
            >
              <ListItemContent>
                <Image
                  width={200}
                  src={item.image}
                  alt='blog cover'
                  preview={false}
                />
                <BlogText>
                  <Flex
                    justify='space-between'
                    align='center'
                  >
                    <Title
                      style={{ marginTop: 0, marginBottom: 0 }}
                      level={4}
                    >
                      {item.title}
                    </Title>
                    <Text type='secondary'>{item.date}</Text>
                  </Flex>
                  <Paragraph ellipsis={{ rows: 2 }}>{item.body}</Paragraph>
                  <Link onClick={() => onReadMore(item.id)}>Read more</Link>
                </BlogText>
              </ListItemContent>
            </Skeleton>
          </List.Item>
        )}
      />
    </BlogListWrapper>
  );
};

export default BlogList;

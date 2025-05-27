import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  Typography,
  Button,
  message,
  Modal,
  Skeleton,
  Image,
} from "antd";
import BlogEditModal from "../../components/modals/blogEditModal.tsx";
import { Post } from "../../types/types";
import { deletePostById, fetchPostById } from "../../api/services.ts";
import APP_IMAGES from "../../assets/images/index.ts";

const { Title, Paragraph } = Typography;

const BlogDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [isEditVisible, setEditVisible] = useState(false);

  useEffect(() => {
    if (!id) return;
    fetchPostById(id)
      .then((data) => setPost({ ...data, image: APP_IMAGES.sampleImage }))
      .catch(() => message.error("Failed to load post"))
      .finally(() => setLoading(false));
  }, [id]);

  const handleDelete = async () => {
    Modal.confirm({
      title: "Are you sure to delete this blog?",
      onOk: async () => {
        try {
          if (post?.id) {
            await deletePostById(post.id.toString());
            message.success("Blog deleted!");
            navigate("/blogs");
          }
        } catch (err) {
          console.error("Delete error:", err);
          message.error("Failed to delete blog");
        }
      },
    });
  };

  const handleUpdate = (updated: Post) => {
    setPost(updated);
    setEditVisible(false);
    message.success("Blog updated!");
  };

  if (loading || !post) return <Skeleton active />;

  return (
    <Card
      cover={
        <Image
          width={"100%"}
          style={{ objectFit: "cover" }}
          height={320}
          alt='cover'
          preview={false}
          src={post.image}
        />
      }
    >
      <Title level={2}>{post.title}</Title>
      <Paragraph>{post.body}</Paragraph>
      <Button
        type='primary'
        onClick={() => setEditVisible(true)}
      >
        Edit
      </Button>
      <Button
        danger
        style={{ marginLeft: 8 }}
        onClick={() => handleDelete()}
      >
        Delete
      </Button>

      <BlogEditModal
        visible={isEditVisible}
        post={post}
        onClose={() => setEditVisible(false)}
        onSave={handleUpdate}
      />
    </Card>
  );
};

export default BlogDetailsPage;

import React, { useState } from "react";
import { Modal, Form, Input, Button } from "antd";
import { Post } from "../../types/types";
import { updatePost } from "../../api/services.ts";

interface Props {
  visible: boolean;
  post: Post;
  onClose: () => void;
  onSave: (updatedPost: Post) => void;
}

const BlogEditModal: React.FC<Props> = ({ visible, post, onClose, onSave }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: { title: string; body: string }) => {
    setLoading(true);
    const updatedPost = { ...post, ...values };
    try {
      const savedPost = await updatePost(updatedPost);
      onSave(savedPost);
    } catch (error) {
      console.error("Failed to update post", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={visible}
      title='Edit Blog Post'
      onCancel={onClose}
      footer={null}
    >
      <Form
        form={form}
        layout='vertical'
        initialValues={{ title: post.title, body: post.body }}
        onFinish={handleSubmit}
      >
        <Form.Item
          name='title'
          label='Title'
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='body'
          label='Body'
          rules={[{ required: true }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            loading={loading}
          >
            Save
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default BlogEditModal;

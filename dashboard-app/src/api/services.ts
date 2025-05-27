import axios from "axios";
import { Post } from "../types/types";
import  APP_IMAGES  from "../assets/images/index.ts";

const BLOG_API_BASE_URL = "https://jsonplaceholder.typicode.com";
const API_BASE_URL = process.env.REACT_APP_API_URL;

export const fetchAllUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data; // assuming the response is an array of users
  } catch (error) {
    console.error("Failed to fetch all users:", error);
    throw error;
  }
};

export const fetchUserById = async (userId: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw error;
  }
};

export const fetchPostsByRandomUser = async (): Promise<Post[]> => {
  const getRandomUserId = () => Math.floor(Math.random() * 10) + 1;
  const userId = getRandomUserId();

  const res = await axios.get(`${API_BASE_URL}/users/${userId}/posts`);
  console.log("Fetched posts for userId:", userId, "Response:", res.data);
  const withImages = res.data.map((post: any, index: number) => ({
    ...post,
    image: APP_IMAGES.sampleImage,
    date: post.createAt,
  }));

  return withImages;
};

export const updatePost = async (post: Post): Promise<Post> => {
  const response = await axios.post(
    `${API_BASE_URL}/users/${post.userId}/post/${post.id}`,
    post
  );
  const updatedPost = {
    ...response.data.post,
    image: APP_IMAGES.sampleImage,
    date: "July 28, 2022",
  };
  return updatedPost;
};

export const fetchPostById = async (id: string): Promise<Post> => {
  const response = await axios.get(`${BLOG_API_BASE_URL}/posts/${id}`);
  return response.data;
};

export const deletePostById = async (id: string): Promise<void> => {
  await axios.delete(`${BLOG_API_BASE_URL}/posts/${id}`);
};

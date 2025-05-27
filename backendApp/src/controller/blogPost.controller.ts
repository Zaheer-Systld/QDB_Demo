import { Request, Response } from "express";
import axios from "axios";
import dotenv from 'dotenv';
dotenv.config();
const BLOG_API_BASE_URL = process.env.BLOG_API_BASE_URL


export const getBlogsByUserID = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId, 10);
  console.log("Fetching posts for userId:", userId);
  if (isNaN(userId)) {
    res.status(400).json({ error: "Invalid userId parameter" });
  }

  try {
    const response = await fetch(`${BLOG_API_BASE_URL}/posts?userId=${userId}`);
    if (!response.ok) {
      res.status(response.status).json({ error: "Failed to fetch posts" });
    }
    const userPosts = await response.json();
    res.json(userPosts);
  } catch (error) {
    console.error("Error fetching posts by user ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createOrUpdatePost = async (req: Request, res: Response) => {
  const { userId, postId } = req.params;
  const { title, body } = req.body;

  if (!title || !body) {
     res.status(400).json({ message: "Title and body are required." });
  }

  try {
    // Forward the POST request to the remote API (jsonplaceholder)
    const response = await axios.put(`${BLOG_API_BASE_URL}/posts/${postId}`, {
      userId: Number(userId),
      id: Number(postId),
      title,
      body,
    });

    // Return the response data back to frontend
    res.status(200).json({
      message: "Post created/updated successfully",
      post: response.data,
    });
  } catch (error) {
    console.error("Error updating post:", error);
    res.status(500).json({ message: "Failed to create/update post" });
  }
};

// ✅ Get a single post by I
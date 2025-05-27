import { Router } from "express";
import { getUser, getUserById } from "../controller/users.controller";
import { createOrUpdatePost, getBlogsByUserID , } from "../controller/blogPost.controller";

const userRouter = Router();
userRouter.get("/", getUser); // Get all users
userRouter.get("/:id", getUserById);
userRouter.get("/:userId/posts", getBlogsByUserID); // Get a user by ID
userRouter.post("/:userId/post/:postId", createOrUpdatePost);

export default userRouter;

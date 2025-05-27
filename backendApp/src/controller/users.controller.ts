import { user } from "../constants/user";
import { Request, Response } from "express";

export const getUser = async (req:Request, res: Response) => {
    try {
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Not found any User" });
    }
}

export const getUserById = async (req:Request, res: Response) => {
    try {
        const userId = parseInt(req.params.id, 10);
        const users = user.find((u) => u.id === userId);

        if (users) {
            res.status(200).json(users);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Nill" });
    }
}
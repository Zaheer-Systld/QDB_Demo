// src/server.ts

import express from "express";
import  cors  from "cors";
import userRouter from "./routes/user.routes";
import dotenv from 'dotenv';



const app = express();
dotenv.config();

app.use(cors());
app.use(express.json())
app.use('/users', userRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});

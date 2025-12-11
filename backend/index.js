import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./Routes/book.route.js";
import userRoute from "./Routes/user.route.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connect
mongoose
  .connect(process.env.MongoDBURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting MongoDB:", err));

// Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Vercel needs this handler
export default app;

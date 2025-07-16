import express from "express";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import chatRoutes from "./routes/chat.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./lib/db.js";

const PORT = process.env.PORT || 3000;
const app = express();
const NODE_ENV = process.env.NODE_ENV;
app.use(
  cors({
    origin: process.env.FRONT_END_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);

const startServer = async () => {
  try {
    await connectDB();

    // listen for local development
    if (NODE_ENV !== "production") {
      app.listen(PORT, () =>
        console.log("Server is up and running on PORT:", PORT)
      );
    }
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();

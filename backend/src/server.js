import express from "express";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import chatRoutes from "./routes/chat.route.js";
import cookieParser from "cookie-parser";
import cosrs from "cors";
import { connectDB } from "./lib/db.js";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(
  cosrs({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on PORT ${PORT}`);
});

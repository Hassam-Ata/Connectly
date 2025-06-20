import express from "express";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "../lib/db.js";
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on PORT ${PORT}`);
});

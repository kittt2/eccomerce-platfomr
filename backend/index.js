import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";
import path from "path";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

connectDB();

const app = express();
const __dirname = path.resolve();

app.use(
  cors({
origin: ["https://eccomerce-platfom.onrender.com", "https://nitinproject01.netlify.app"],    
    optionsSuccessStatus: 200, 
  })
);
app.use(express.json());
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, 'project', 'public')));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

app.use(express.static(path.join(__dirname, "/project/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "project", "dist", "index.html"));
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});

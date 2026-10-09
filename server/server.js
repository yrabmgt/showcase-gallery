import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: [
      "https://showcase-gallery-ivory.vercel.app",
      "http://localhost:5173",
    ],
  })
);

app.use(express.json({ limit: "5mb" }));

app.get("/", (req, res) => {
  res.json({ message: "ShowCase API is running!" });
});

app.use("/api/products", productRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
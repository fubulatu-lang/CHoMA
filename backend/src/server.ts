import express from "express";
import cors from "cors";

import { authRoutes } from "./modules/auth";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (_, res) => {
  res.json({
    name: "HRAPIMS API",
    status: "healthy",
    version: "1.0.0",
  });
});

export default app;
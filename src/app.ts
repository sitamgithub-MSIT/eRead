import express from "express";

const app = express();

app.get("/", (req, res, next) => {
  res.json({ message: "Welcome to eRead apis" });
});

export default app;

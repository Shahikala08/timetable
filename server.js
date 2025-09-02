// server.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [];

// Get all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Add a task
app.post("/tasks", (req, res) => {
  const { title, time } = req.body;
  if (!title) return res.status(400).json({ error: "Title required" });
  const task = { id: Date.now(), title, time };
  tasks.push(task);
  res.json(task);
});

// Simple ping
app.get("/", (req, res) => {
  res.send("✅ Task API is running!");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));

require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const urlRoutes = require("./routes/urlRoutes");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("🚀 URL Shortener API is Running...");
});

// URL Routes
app.use("/api/url", urlRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
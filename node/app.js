const express = require("express");
const postRoutes = require("./routes/posts");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/posts", postRoutes);

module.exports = app;

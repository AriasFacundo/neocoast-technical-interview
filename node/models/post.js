const mongoose = require("mongoose");

// Define the schema for posts
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
});

// Export the model
module.exports = mongoose.model("Post", postSchema);

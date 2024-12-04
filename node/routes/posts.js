const express = require("express");
const Post = require("../models/post");

const router = express.Router();

// Get all posts
router.get("/", async (_req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

// Create a post
router.post("/", async (req, res) => {
  try {
    const { title, body } = req.body;
    const newPost = await Post.create({ title, body });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: "Failed to create post" });
  }
});

// Delete a post
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Post.deleteOne({ _id: id });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete post" });
  }
});

// Get a specific post
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch post" });
  }
});

// Update a post
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, body } = req.body;
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { title, body },
      { new: true }
    );
    if (!updatedPost) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: "Failed to update post" });
  }
});

module.exports = router;

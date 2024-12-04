const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
const connectDB = require("../config/db");
const Post = require("../models/post");

// Connect to a test database before running the tests
beforeAll(async () => {
  await connectDB("test_db");
});

// Clear the database after each test
afterEach(async () => {
  await Post.deleteMany({});
});

// Close the database connection after all tests
afterAll(async () => {
  await mongoose.connection.close();
});

describe("POST /posts", () => {
  it("should create a new post", async () => {
    const postData = { title: "Test Post", body: "This is a test post." };

    const response = await request(app).post("/posts").send(postData);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("_id");
    expect(response.body.title).toBe(postData.title);
    expect(response.body.body).toBe(postData.body);
  });
});

describe("GET /posts", () => {
  it("should fetch all posts", async () => {
    const posts = [
      { title: "First Post", body: "First body content" },
      { title: "Second Post", body: "Second body content" },
    ];

    await Post.insertMany(posts);

    const response = await request(app).get("/posts");

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(2);
    expect(response.body[0].title).toBe(posts[0].title);
  });
});

describe("DELETE /posts/:id", () => {
  it("should delete a post by id", async () => {
    const post = await Post.create({ title: "To Delete", body: "Content" });

    const response = await request(app).delete(`/posts/${post._id}`);

    expect(response.status).toBe(204);

    const deletedPost = await Post.findById(post._id);
    expect(deletedPost).toBeNull();
  });
});

describe("PUT /posts/:id", () => {
  it("should update a post by id", async () => {
    const post = await Post.create({ title: "Old Title", body: "Old Body" });

    const updatedData = { title: "New Title", body: "New Body" };
    const response = await request(app)
      .put(`/posts/${post._id}`)
      .send(updatedData);

    expect(response.status).toBe(200);
    expect(response.body.title).toBe(updatedData.title);
    expect(response.body.body).toBe(updatedData.body);
  });
});

const mongoose = require("mongoose");

const connectDB = async (dbName = "test_db") => {
  try {
    const dbUri = `${process.env.DB_CONNECTION_STRING}${dbName}`;
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to MongoDB database: ${dbName}`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;

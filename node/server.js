const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT;

// Connect to the database and start the server
connectDB(process.env.DB_NAME);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

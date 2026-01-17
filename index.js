const express = require("express");
const mongoose = require("mongoose");

const postRouter = require("./routes/posts");
const commentRouter = require("./routes/comment");

const app = express();
app.use(express.json());

const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL);
const db = mongoose.connection;

db.on("error", (error) => console.error("Database Error:", error));
db.once("open", () => console.log("Connected to MongoDB"));

app.use("/post", postRouter);
app.use("/comment", commentRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

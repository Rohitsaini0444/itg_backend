const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

const userRouter = require("./routes/userRoutes/index");
const postRouter = require("./routes/postRoutes/index");

//Set up default mongoose connection
const mongoDB = "mongodb://127.0.0.1/newsapp";
const connect = mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connect.then(
  (db) => {
    console.log("Connected to the mongodb server correctly ");
  },
  (err) => {
    console.log("MongoDB connection error:", err);
  }
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(bodyParser.json());

app.use("/users", userRouter);
app.use("/posts", postRouter);

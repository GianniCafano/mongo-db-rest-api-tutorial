const express = require("express");
const mongoose = require("mongoose");

const postRoute = require("./routes/post.route");

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

mongoose
  .connect(
    "mongodb+srv://gcafano:8IrJTgTOeairThG9@sample-blog-cluster.f9samns.mongodb.net/?retryWrites=true&w=majority&appName=sample-blog-cluster",
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(port, () => {
      console.log("App listening on port 3000");
    });
  })
  .catch((e) => {
    console.log("Failed to connect to database", e);
  });

app.use("/api/posts", postRoute);

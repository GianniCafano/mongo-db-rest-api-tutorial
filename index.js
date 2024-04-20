const express = require("express");
const mongoose = require("mongoose");

const postRoute = require("./routes/post.route");

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_DB_CONNECTTION_STRING)
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

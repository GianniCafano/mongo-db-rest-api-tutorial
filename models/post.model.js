const mongoose = require("mongoose");

const postModel = mongoose.Schema(
  {
    author: {
      type: String,
      required: [true, "Author is required"],
    },
    title: {
      type: String,
      required: [true, "Post title is required"],
    },
    description: {
      type: String,
      required: [true, "Post description is required"],
    },
    body: {
      type: String,
      required: [true, "Post body is required"],
    },
  },
  {
    timestamps: true,
  },
);

const Post = mongoose.model("Post", postModel);

module.exports = Post;

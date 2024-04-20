const express = require("express");
const router = express.Router();
const {
  getAllPosts,
  getPost,
  updatePost,
  deletePost,
  createPost,
} = require("../controllers/post.controller");

router.get("/retrieve", getAllPosts);

router.get("/retrieve/:id", getPost);

router.put("/update/:id", updatePost);

router.delete("/delete/:id", deletePost);

router.post("/create", createPost);

module.exports = router;

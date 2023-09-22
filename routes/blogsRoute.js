const express = require("express");
const router = express.Router();
const {
  getBlog,
  getBlogs,
  likeCount,
  addComment,
  postBlog,
} = require("../controller/blogsController.js");

router.get("/blogs", getBlogs);
router.post("/blogs", postBlog);
router.get("/blogs/:id", getBlog);
router.patch("/blogs/like/:id", likeCount);
router.patch("/blogs/comment/:id", addComment);

module.exports = router;

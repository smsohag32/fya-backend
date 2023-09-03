const express = require("express");
const router = express.Router();
const { getBlog, getBlogs, likeCount } = require("../controller/blogsController.js");

router.get("/blogs", getBlogs);
router.get("/blogs/:id", getBlog);
router.patch("/blogs/like/:id", likeCount);

module.exports = router;

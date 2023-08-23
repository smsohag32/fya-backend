const express = require("express");
const {
  userPost,
  getUserRole,
  jwtTokenPost,
} = require("../controller/userController");
const router = express.Router();

router.put("/users/:email", userPost);
router.get("/users/:email", getUserRole);
router.post("/users/jwt", jwtTokenPost);

module.exports = router;

const express = require("express");
const {
  userPost,
  jwtTokenPost,
  deleteUser,
  getUserRole,
  getAllUsers,
  updateUserRole,
} = require("../controller/userController");
const router = express.Router();

router.put("/users/:email", userPost);
router.get("/users", getAllUsers);
router.delete("/users", deleteUser);
router.get("/users/:email", getUserRole);
router.post("/users/jwt", jwtTokenPost);
router.patch("/users/role/:email", updateUserRole);

module.exports = router;

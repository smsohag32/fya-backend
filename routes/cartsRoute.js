const express = require("express");
const router = express.Router();
const {
  getCarts,
  postCart,
  getCart,
  deleteCart,
  getUserCarts,
} = require("../controller/cartsController.js");

router.get("/carts", getCarts);
router.post("/carts/:email", postCart);
router.get("/carts/:id", getCart);
router.delete("/carts/:id", deleteCart);
router.get("/carts/user/:email", getUserCarts);

module.exports = router;

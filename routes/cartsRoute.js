const express = require("express");
const router = express.Router();
const {  getCarts, postCart ,getCart, getUserCarts } = require("../controller/cartsController.js");

router.get("/carts", getCarts);
router.post("/carts", postCart);
router.get("/carts/:id", getCart);
router.get("/carts/user/:email", getUserCarts);

module.exports = router;

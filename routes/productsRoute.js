const express = require("express");
const router = express.Router();
const {
  getAllProduct,
  getProduct,
} = require("../controller/productController.js");

router.get("/products", getAllProduct);
router.get("/products/:id", getProduct);

module.exports = router;

const products = require("../models/ProductsInfo.js");

const getAllProduct = async (req, res) => {
  try {
    const productsData = await products.find();
    res.send(productsData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await products.findById(id);
    res.send(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getAllProduct, getProduct };

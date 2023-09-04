const cartsInfos = require("../models/cartsInfo.js");
const productInfos = require("../models/ProductsInfo.js")
const getCarts = async (req, res) => {
  try {
      const cartsData = await cartsInfos.find();

    res.send(cartsData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const getUserCarts = async (req, res) => {
    try {
        
    const query = { userEmail: req.params.email }
      const cartsData = await cartsInfos.find(query);
        res.send(cartsData);
  } catch (error) {
    res.status(500).send(error.message);
  }
}


const getCart = async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await cartsInfos.findById(id);
    res.send(blog);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


const postCart = async (req, res) => {
  try {
    const newCart = req.body;
    const cart = await cartsInfos.create(newCart);
    res.send(cart);
  } catch (error) {
    res.status(500).send(error.message);
  }
};



module.exports = { getCarts, postCart ,getCart, getUserCarts};

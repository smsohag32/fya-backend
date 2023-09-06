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
    const cart = await cartsInfos.findById(id);
    res.send(cart);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const deleteCart = async (req, res) => {
  try {
    const id = req.params.id;
    const query = {_id: id}
    const result = await cartsInfos.deleteOne(query);
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


const postCart = async (req, res) => {
  try {
    const userEmail = req.params.email;
    const newCart = req.body;
    const productID = newCart.productID;
    const query = {userEmail: userEmail}
    const existingCart = await cartsInfos.findOne(query);
    if (existingCart && existingCart.productID === productID) {
      return res.send({ message: 'Product already in the cart' });
    } else {
      await cartsInfos.create(newCart);
      return res.send("add product successfully")
    }
  
  } catch (error) {
    res.status(500).send(error.message);
  }
};



module.exports = { getCarts, postCart ,getCart, getUserCarts, deleteCart};

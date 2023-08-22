import { Schema, model, models } from "mongoose";

const productSchema = new Schema({
  workShop_id: {
    type: String,
    required: [true, "workShop_id is required."],
  },
  image: {
    type: String,
    required: [true, "image is required."],
  },
  name: {
    type: String,
    required: [true, "address name is required."],
  },
  category: {
    type: String,
    required: [true, "email is required."],
  },
  description: {
    type: String,
    required: [true, "phone is required."],
  },
  price: {
    type: Number,
    required: [true, "Price is required."],
  },
  stock: {
    type: Number,
    required: [true, "services is required."],
  },
  discount: {
    type: Boolean,
  },
  discountedPrice: {
    type: Number,
  },
  discountPercentage: {
    type: String,
  },
  rating: {
    type: Number,
  },
  likes: {
    type: Number,
  },
});

const products = models.products || model("products", productSchema);

export default products;

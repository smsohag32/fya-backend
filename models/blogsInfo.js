const { Schema, model, models } = require("mongoose");

const blogsInfoSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required."],
  },
  author: {
    type: String,
    required: [true, "Author is required."],
  },
  email: {
    type: String,
    required: [true, "email is required."],
  },
  tags: {
    type: Array,
    required: [true, "Tags are required."],
  },
  content: {
    type: String,
  },
  date: {
    type: String,
  },
  comments: {
    type: [],
  },
  likes: {
    type: Number,
  },
});

const blogsInfo = models.blogsInfo || model("blogsInfo", blogsInfoSchema);


module.exports = blogsInfo;

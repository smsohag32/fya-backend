const { Schema, model, models } = require("mongoose");

const blogsInfoSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required."],
  },
  author: {
    type: String,

  },
  email: {
    type: String,
  },
  tags: {
    type: Array,
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
    type: [],
  },
});

const blogsInfo = models.blogsInfo || model("blogsInfo", blogsInfoSchema);


module.exports = blogsInfo;

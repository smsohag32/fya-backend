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
  tags: {
    type: Array,
    required: [true, "Tags are required."],
  },
  date: {
    type: Date,
    required: [true, "Date is required."],
  },
});

const BlogsInfo = models.BlogsInfo || model("BlogsInfo", blogsInfoSchema);

export default BlogsInfo;

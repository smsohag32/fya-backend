const blogsInfo = require("../models/blogsInfo.js");

const getBlogs = async (req, res) => {
  try {
    const blogsData = await blogsInfo.find();
    res.send(blogsData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await blogsInfo.findById(id);
    res.send(blog);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const likeCount = async (req, res) => {
  try {
    const id = req.params.id;
    const newLike = req.body;

    const blog = await blogsInfo.findById(id);

    if (!blog) {
      return res.status(404).send('Blog not found');
    }

    // Check if the user has already liked the blog
    const userLikeIndex = blog.likes.findIndex((like) =>
      like.user_email === newLike.user_email
    );

    let message = '';

    if (userLikeIndex === -1) {
      // User has not liked the blog, so add the like
      blog.likes.push(newLike);
      message = 'Like added successfully';
    } else {
      // User has already liked the blog, so remove the like
      blog.likes.splice(userLikeIndex, 1);
      message = 'Like removed successfully';
    }

    // Calculate the total likes
    const totalLikes = blog.likes.length;

    await blog.save();
    res.send({ totalLikes, message });
  } catch (error) {
    res.status(500).send(error.message);
  }
}


const addComment = async (req, res) => {
     try {
       const id = req.params.id;
       const newComment = req.body;
       const update =  { $push: { comments: newComment } }
       const options = { new: true, upsert: true };
       const updatedBlog = await blogsInfo.findByIdAndUpdate(id, update, options);
        if (!updatedBlog) {
            return res.status(404).send('Blog not found');
        }
        res.send({message: 'new comment add success'});
         } catch (error) {
        res.status(500).send(error.message);
        }
}



module.exports = { getBlogs, getBlog, addComment ,likeCount};

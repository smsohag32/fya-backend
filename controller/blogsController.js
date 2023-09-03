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
        const update = { $inc: { likes: 1 } };
       const options = { new: true, upsert: true };
       const updatedBlog = await blogsInfo.findByIdAndUpdate(id, update, options);

        if (!updatedBlog) {
            return res.status(404).send('Blog not found');
        }
        res.send({message: "new likes add success"});
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

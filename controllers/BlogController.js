const BlogService = require("../services/BlogService");

const getAllBlogs = async (req, res, next) => {
  try {
    const getBlogs = await BlogService.getAllBlogs();
    res.json(getBlogs);
  } catch (err) {
    throw err;
  }
};

const deleteBlog = async (req, res, next) => {
  try {
    await BlogService.deleteBlog(req.params.id);
    res.json({ success: "ok" });
  } catch (err) {
    throw err;
  }
};

const createBlog = async (req, res, next) => {
  try {
    const createdBlog = await BlogService.createBlog(req.body);
    res.json(createdBlog);
  } catch (err) {
    throw err;
  }
};

const updateblog = async (req, res, next) => {
  try {
    const updatedBlog = await BlogService.updateBlog(req.body);
    res.json(updatedBlog);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getAllBlogs,
  deleteBlog,
  createBlog,
};

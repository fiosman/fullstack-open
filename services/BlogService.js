const Blog = require("../models").blog;

const getAllBlogs = async () => {
  try {
    const allBlogs = await Blog.findAll();
    return allBlogs;
  } catch (err) {
    throw err;
  }
};

const deleteBlog = async () => {
  try {
  } catch (err) {
    throw err;
  }
};

const createBlog = async () => {
  try {
  } catch (err) {
    throw err;
  }
};

module.exports = { getAllBlogs, deleteBlog, createBlog };

const Blog = require("../models").blog;

const getAllBlogs = async () => {
  try {
    const allBlogs = await Blog.findAll();
    return allBlogs;
  } catch (err) {
    throw err;
  }
};

const deleteBlog = async (id) => {
  try {
    await Blog.destroy({
      where: {
        id,
      },
    });
    return true;
  } catch (err) {
    throw err;
  }
};

const createBlog = async (blog) => {
  const { author, url, title } = blog;
  try {
    const newBlog = await Blog.create({
      author,
      url,
      title,
    });
    return newBlog;
  } catch (err) {
    throw err;
  }
};

module.exports = { getAllBlogs, deleteBlog, createBlog };

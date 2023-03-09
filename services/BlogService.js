const Blog = require("../models").blog;

const getAllBlogs = async (search) => {
  try {
    const allBlogs = await Blog.findAll({
      where: {
        [Op.or]: [
          {
            title: {
              [Op.iLike]: `%${search ?? ""}%`,
            },
          },
          {
            author: {
              [Op.iLike]: `%${search ?? ""}%`,
            },
          },
        ],
      },
      order: [["likes", "DESC"]],
    });
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

const updateBlog = async (blogData) => {
  try {
    const updatedBlog = Blog.update(blogData, {
      where: {
        id: blogData.id,
      },
    });
    return updatedBlog;
  } catch (err) {
    throw err;
  }
};

module.exports = { getAllBlogs, deleteBlog, createBlog, updateBlog };

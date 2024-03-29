const Blog = require("../models").blog;
const sequelize = require("../models").sequelize;

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

const getBlogsByAuthors = async () => {
  try {
    const authors = await sequelize.query(
      'SELECT "author", "COUNT("id") AS "articles", "SUM("likes") AS "likes" FROM "blogs" GROUP BY "author" ORDER BY "likes" DESC',
      {
        type: sequelize.QueryTypes.SELECT,
      }
    );

    return authors;
  } catch (err) {
    throw err;
  }
};

module.exports = { getAllBlogs, deleteBlog, createBlog, updateBlog, getBlogsByAuthors };

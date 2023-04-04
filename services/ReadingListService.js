const UserBlog = require("../models").UserBlog;

const addBlogToReadingList = async (blogId, userId) => {
  try {
    const userBlog = await UserBlog.create({ userId, blogId });
    return userBlog;
  } catch (err) {
    throw err;
  }
};

module.exports = { addBlogToReadingList };

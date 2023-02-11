const getAllBlogs = async (req, res, next) => {
  try {
    const getBlogs = await BlogService.getAllBlogs();
    res.json(getBlogs);
  } catch (e) {
    throw e;
  }
};

const deleteBlog = async (req, res, next) => {};

const createBlog = async (req, res, next) => {};

module.exports = {
  getAllBlogs,
  deleteBlog,
  createBlog,
};

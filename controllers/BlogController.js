const getAllBlogs = async (req, res, next) => {
  try {
    const getBlogs = await BlogService.getAllBlogs();
    res.json(getBlogs);
  } catch (e) {
    throw e;
  }
};

const deleteBlog = async (req, res, next) => {
  try {
    await BlogService.deleteBlog(req.params.id);
    res.json({ success: "ok" });
  } catch (e) {
    throw e;
  }
};

const createBlog = async (req, res, next) => {
  try {
    const createdBlog = await BlogService.createBlog(req.body);
    res.json(createdBlog);
  } catch (e) {
    throw e;
  }
};

module.exports = {
  getAllBlogs,
  deleteBlog,
  createBlog,
};
